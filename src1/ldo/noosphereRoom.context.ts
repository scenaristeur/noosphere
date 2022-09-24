import { ContextDefinition } from "jsonld";

/**
 * =============================================================================
 * noosphereRoomContext: JSONLD Context for noosphereRoom
 * =============================================================================
 */
export const noosphereRoomContext: ContextDefinition = {
  idRoom: {
    "@id": "https://scenaristeur.github.io/noosphere/ns/idRoom",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  created: {
    "@id": "http://purl.org/dc/terms/created",
    "@type": "http://www.w3.org/2001/XMLSchema#date",
  },
  creator: {
    "@id": "http://purl.org/dc/terms/creator",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
};
