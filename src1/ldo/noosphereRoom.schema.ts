import { Schema } from "shexj";

/**
 * =============================================================================
 * noosphereRoomSchema: ShexJ Schema for noosphereRoom
 * =============================================================================
 */
export const noosphereRoomSchema: Schema = {
  type: "Schema",
  shapes: [
    {
      id: "https://scenaristeur.github.io/noosphere/ns/noosphereRoom",
      type: "Shape",
      expression: {
        type: "EachOf",
        expressions: [
          {
            type: "TripleConstraint",
            predicate: "https://scenaristeur.github.io/noosphere/ns/idRoom",
            valueExpr: {
              type: "NodeConstraint",
              datatype: "http://www.w3.org/2001/XMLSchema#string",
            },
            min: 0,
            max: 1,
          },
          {
            type: "TripleConstraint",
            predicate: "http://purl.org/dc/terms/created",
            valueExpr: {
              type: "NodeConstraint",
              datatype: "http://www.w3.org/2001/XMLSchema#date",
            },
            min: 0,
            max: 1,
          },
          {
            type: "TripleConstraint",
            predicate: "http://purl.org/dc/terms/creator",
            valueExpr: {
              type: "NodeConstraint",
              datatype: "http://www.w3.org/2001/XMLSchema#string",
            },
            min: 0,
            max: 1,
          },
        ],
      },
      extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
    },
  ],
};
