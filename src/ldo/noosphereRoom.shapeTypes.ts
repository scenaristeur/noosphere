import { ShapeType } from "ldo";
import { noosphereRoomSchema } from "./noosphereRoom.schema";
import { noosphereRoomContext } from "./noosphereRoom.context";
import { noosphereRoom } from "./noosphereRoom.typings";

/**
 * =============================================================================
 * LDO ShapeTypes noosphereRoom
 * =============================================================================
 */

/**
 * noosphereRoom ShapeType
 */
export const noosphereRoomShapeType: ShapeType<noosphereRoom> = {
  schema: noosphereRoomSchema,
  shape: "https://scenaristeur.github.io/noosphere/ns/noosphereRoom",
  context: noosphereRoomContext,
};
