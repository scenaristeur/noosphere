import ForceGraph3D from '3d-force-graph';
import {CSS2DRenderer, CSS2DObject} from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import SpriteText from 'three-spritetext';
import * as THREE from 'three';

// let selectedNodes = new Set(),
// let highlightNodes = new Set(),
// highlightLinks = new Set(),
// hoverNode= null
// import { Neurone/*, Brain,*/ /* Graph*/ } from '@/neurone-factory'

// let graph = undefined
const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store
    let size = getSize()

    function getSize(){
      //768 = medium bootstrap
      return {w: window.innerWidth > 768 ? window.innerWidth/2 : window.innerWidth,
        h: window.innerWidth > 768 ? window.innerHeight*.9 : window.innerHeight*.8}
      }
      window.addEventListener('resize', function(){
        if (store.state.network.graph != null){
          size = getSize()
          store.state.network.graph.width(size.w)
          store.state.network.graph.height(size.h)
        }
      } );

Vue.prototype.$zoomToFit = function(/*params*/){
  // console.log(params.text)

store.state.network.graph.zoomToFit(10,10, node =>{

   store.state.network.search == null || store.state.network.search.text.length > 0 && node.name.includes(store.state.network.search.text)
// let show = node.name.includes(store.state.network.search.text)
// console.log(node.name, show)
//    return show
})
}


      Vue.prototype.$graphInit = async function(options){
        // console.log(options)
        let graphData={nodes: [], links: []}
        let highlightNodes = store.state.network.highlightNodes
        let highlightLinks = store.state.network.highlightLinks
        let hoverNode = store.state.network.hoverNode

        let graph = ForceGraph3D({extraRenderers: [new CSS2DRenderer()]})(options.domElement).graphData(graphData)
        graph
        .width(size.w)
        .height(size.h)
        //.backgroundColor('#eafaff')
        // .nodeId('id')
        .nodeLabel('name')
        .nodeAutoColorBy("type")
        //.nodeRelSize(5)
        .nodeColor(node => highlight(node) ? 'yellow' : highlightNodes.has(node) ? node === hoverNode ? 'rgb(255,0,0,1)' : 'rgba(255,160,0,0.8)' : node.color)
        //.nodeColor(node => /*highlightNodes.has(node) ? node === hoverNode ? 'rgb(255,0,0,1)' : 'rgba(255,160,0,0.8)' :*/ node.color)
        //.onBackgroundClick(event => onBackgroundClick(event))
        .onNodeClick(node => onNodeClick(node))
        .onLinkClick(ln => onLinkClick(ln))
        .nodeThreeObjectExtend(node => node.shape == undefined || node.shape == null)
        .nodeThreeObject(node => nodeThreeObject(node))
        // .nodeThreeObject(node => nodeThreeObjectGroup(node))
        .linkCurvature('curvature')
        .linkCurveRotation('rotation')
        .linkThreeObjectExtend(true)
        .linkThreeObject(link => {
          // extend link with text sprite
          if(link.label != undefined){
            const sprite = new SpriteText(`${link.label}`);
            sprite.color = 'lightgrey';
            sprite.textHeight = 1.5;
            return sprite;
          }
        })
        .linkDirectionalArrowLength(3.5)
        .linkDirectionalArrowRelPos(1)
        //  .linkCurvature(0.25)
        .linkPositionUpdate((sprite, { start, end }) => {
          if(sprite != undefined){
            const middlePos = Object.assign(...['x', 'y', 'z'].map(c => ({
              [c]: start[c] + (end[c] - start[c]) / 4 // calc middle point
            })))
            // Position sprite
            Object.assign(sprite.position, middlePos);
          }
        })
        .linkWidth(link => highlightLinks.has(link) ? 4 : 1)
        .linkDirectionalParticles(link => highlightLinks.has(link) ? 4 : 0)
        .linkDirectionalParticleWidth(4)
        .onNodeHover(node => {
          // no state change
          if ((!node && !highlightNodes.size) || (node && hoverNode === node)) return;

          highlightNodes.clear();
          highlightLinks.clear();
          if (node) {
            highlightNodes.add(node);
            //  node.neighbors.forEach(neighbor => highlightNodes.add(neighbor));
            //  node.links.forEach(link => highlightLinks.add(link));
          }

          hoverNode = node || null;

          Vue.prototype.$updateHighlight();
        })
        .onLinkHover(link => {
          highlightNodes.clear();
          highlightLinks.clear();

          if (link) {
            highlightLinks.add(link);
            highlightNodes.add(link.source);
            highlightNodes.add(link.target);
          }
          Vue.prototype.$updateHighlight();
        })
        // console.log(graph)
        store.commit ('network/setGraph', graph)
      }

      function highlight(node){
        //console.log(node)
        return store.state.network.search != null && store.state.network.search.text.length > 0 && node.name.includes(store.state.network.search.text)
      }
      // Vue.prototype.$onNodeSearch = async function (node, event){
      //   console.log(node, event)
      //     // if (event.ctrlKey || event.shiftKey || event.altKey) { // multi-selection
      //     //   store.state.network.selectedNodes.has(node) ? store.state.network.selectedNodes.delete(node) : store.state.network.selectedNodes.add(node);
      //     // } else { // single-selection
      //     //   const untoggle = store.state.network.selectedNodes.has(node) && store.state.network.selectedNodes.size === 1;
      //     //   store.state.network.selectedNodes.clear();
      //     //   !untoggle && store.state.network.selectedNodes.add(node);
      //     // }
      //     store.state.network.selectedNodes.add(node)
      //
      //     store.state.network.graph.nodeColor(store.state.network.graph.nodeColor()); // update color of selected nodes
      //   }

      Vue.prototype.$nodeFocus = function(node) {
      //  console.log("node",node)

        const distance = 50;
        let pos = {x: distance, y: distance, z: distance}
        if(node.x != 0 && node.y != 0 && node.z != 0){
          const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);
          pos = { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }
        }
        store.state.network.graph.cameraPosition(
          pos, // new position
          node, // lookAt ({ x, y, z })
          3000  // ms transition duration
        );
        // console.log(store.state.network.graph)
        let n = store.state.network.nodes.find(n => n.id == node.id)
        store.commit ('network/setCurrentNode', n)

      }

      Vue.prototype.$updateHighlight = function() {
        // trigger update of highlighted objects in scene
      //  console.log(store.state.network.highlightNodes)
        let graph = store.state.network.graph
        graph
        .nodeColor(graph.nodeColor())
        .linkWidth(graph.linkWidth())
        .linkDirectionalParticles(graph.linkDirectionalParticles());
      }


      function onLinkClick(ln){
        console.log(ln)
      }


      function nodeThreeObject(node){
        let shape = null
        let geometry = null
        let material =   new THREE.MeshLambertMaterial({
          color: node.color ||Math.round(Math.random() * Math.pow(2, 24)),
          transparent: true,
          opacity: 0.75
        })
        let image, texture, sprite = null
        // console.log(material)
        // console.log(node.shape)
        switch (node.shape) {
          case "box":
          geometry = new THREE.BoxGeometry( 20,  20,  20)
          break;
          case "cylinder":
          geometry = new THREE.CylinderGeometry( 10,  10,  20)
          break;
          case "cone":
          geometry = new THREE.ConeGeometry( 10,  20)
          break;
          case "dodecahedron":
          geometry = new THREE.DodecahedronGeometry( 10)
          break;
          case "sphere":
          geometry = new THREE.SphereGeometry( 10)
          break;
          case "torus":
          geometry = new THREE.TorusGeometry( 10,  2)
          break;
          case "torusKnot":
          geometry = new THREE.TorusKnotGeometry( 10,  2)
          break;
          case "base64":
          //  console.log("base64",node)
          image = new Image();
          image.src = node.base64;
          texture = new THREE.Texture();
          texture.image = image;
          image.onload = function () {
            texture.needsUpdate = true;
          };
          material = new THREE.SpriteMaterial({ map: texture });
          sprite = new THREE.Sprite(material);
          sprite.scale.set(2, 2);
          //return sprite;
          break;
          default:
          //  geometry = null

        }
        if (sprite != null){
          shape = sprite
          //  console.log("sprite", shape)
        }else{
          if(geometry == null){
            const nodeEl = document.createElement('div');
            nodeEl.textContent = node.name //node.id;
            nodeEl.style.color = node.color || "#ffffff";
            nodeEl.className = 'node-label';
            shape = new CSS2DObject(nodeEl);
            // console.log(shape)
            // nodeEl.addEventListener('pointerdown', () => {
            //   alert(1)
            //   console.log(shape)
            //  })
          }else{
            shape = new THREE.Mesh(geometry, material)
          }
        }
        return shape
      }


      // function nodeThreeObjectGroup(node){
      //
      //   const group = new THREE.Group();
      //
      //   let label = null
      //   let geometry = null
      //   let material =   new THREE.MeshLambertMaterial({
      //     color: node.color ||Math.round(Math.random() * Math.pow(2, 24)),
      //     transparent: true,
      //     opacity: 0.75
      //   })
      //   // console.log(material)
      //   // console.log(node.shape)
      //   switch (node.shape) {
      //     case "box":
      //     geometry = new THREE.BoxGeometry(Math.random() * 20, Math.random() * 20, Math.random() * 20)
      //     break;
      //     case "cylinder":
      //     geometry = new THREE.CylinderGeometry(Math.random() * 10, Math.random() * 10, Math.random() * 20)
      //     break;
      //     case "cone":
      //     geometry = new THREE.ConeGeometry(Math.random() * 10, Math.random() * 20)
      //     break;
      //     case "dodecahedron":
      //     geometry = new THREE.DodecahedronGeometry(Math.random() * 10)
      //     break;
      //     case "sphere":
      //     geometry = new THREE.SphereGeometry(Math.random() * 10)
      //     break;
      //     case "torus":
      //     geometry = new THREE.TorusGeometry(Math.random() * 10, Math.random() * 2)
      //     break;
      //     case "torusKnot":
      //     geometry = new THREE.TorusKnotGeometry(Math.random() * 10, Math.random() * 2)
      //     break;
      //     default:
      //   }
      //
      //   const nodeEl = document.createElement('div');
      //   nodeEl.textContent = node.name //node.id;
      //   nodeEl.style.color = node.color || "#ffffff";
      //   nodeEl.className = 'node-label';
      //   label =  new CSS2DObject(nodeEl);
      //
      //   if (geometry != null){
      //     group.add(new THREE.Mesh(geometry, material))
      //   }
      //   group.add(label)
      //
      //   return group
      // }


      // function nodeThreeObject1(node){
      //   const nodeEl = document.createElement('div');
      //   nodeEl.textContent = node.name //node.id;
      //   nodeEl.style.color = node.color || "#ffffff";
      //   nodeEl.className = 'node-label';
      //   return new CSS2DObject(nodeEl);
      // }
      // function nodeThreeObject({url}){
      //   // .nodeThreeObject(({ url }) => {
      //
      //   // if(url == undefined){
      //   //   url = "root"
      //   // }
      //   if (url != undefined && (url.endsWith('.png') || url.endsWith('.jpg') || url.endsWith('.jpeg'))){
      //     const imgTexture = new THREE.TextureLoader().load(`${url}`);
      //     const material = new THREE.SpriteMaterial({ map: imgTexture });
      //     const sprite = new THREE.Sprite(material);
      //     sprite.scale.set(12, 12);
      //     return sprite;
      //   }
      //
      // // })
      // }


      async function onNodeClick(node){
        // Aim at node from outside it
        //  console.log(node)
        //this.selectedNodes.clear()
        //this.selectedNodes.has(node) ? this.selectedNodes.delete(node) : this.selectedNodes.add(node);
        // console.log(this.selectedNodes)
        // if(node.url != undefined && node.url.startsWith('http')){
        //   app.$store.commit ('app/mustExplore', node.url)
        // }
  Vue.prototype.$nodeFocus(node)

      }

      // async function onBackgroundClick(event){
      //   // let node =       new Neurone(
      //   //   {
      //   //     //  blip: "blop",
      //   //     //  color: this.randomColor(),
      //   //     //
      //   //     //  id: i,
      //   //     //  name: "node fictif "+i, //"name for graph_",
      //   //     age: 0,
      //   //     type: "neurone",
      //   //     color: '#ffff00'
      //   //   }
      //   // )
      //   console.log(event)
      //   store.dispatch('network/newNode')
      //   // console.log("new", node)
      //   //  Vue.prototype.$bvModal.show("modal-node")
      //
      // }
    }
  }

  // Auto-install
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin)
  }

  export default plugin
