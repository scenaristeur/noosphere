import { ContextDefinition } from "jsonld";

/**
 * =============================================================================
 * Typescript Typings for noosphereRoom
 * =============================================================================
 */

/**
 * noosphereRoom Type
 */
export interface noosphereRoom {
  "@id"?: string;
  "@context"?: ContextDefinition;
  idRoom?: string;
  created?: string;
  creator?: string;
}
