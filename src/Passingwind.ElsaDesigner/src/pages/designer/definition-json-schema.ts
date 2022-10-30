export default
    {
        "$schema": "http://json-schema.org/draft-06/schema#",
        "$ref": "#/definitions/root",
        "definitions": {
            "root": {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                    "activities": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/activity"
                        }
                    },
                    "connections": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/Connection"
                        }
                    }
                },
                "required": [
                    "activities",
                    "connections"
                ],
                "title": "root"
            },
            "activity": {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                    "displayName": {
                        "type": "string"
                    },
                    "name": {
                        "type": "string"
                    },
                    "activityId": {
                        "type": "string",
                        "format": "uuid"
                    },
                    "type": {
                        "type": "string"
                    },
                    "description": {
                        "anyOf": [
                            {
                                "type": "null"
                            },
                            {
                                "type": "string"
                            }
                        ]
                    },
                    "properties": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/Property"
                        }
                    },
                    "attributes": {
                        "$ref": "#/definitions/activityAttributes"
                    }
                },
                "required": [
                    "activityId",
                    "description",
                    "displayName",
                    "name",
                    "type",
                    "properties",
                    "attributes"
                ],
                "title": "activity"
            },
            "activityAttributes": {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                    "x": {
                        "type": "integer"
                    },
                    "y": {
                        "type": "integer"
                    }
                },
                "required": [
                    "outcomes",
                    "x",
                    "y"
                ],
                "title": "activityAttributes"
            },
            "Property": {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "syntax": {
                        "anyOf": [
                            {
                                "type": "null"
                            },
                            {
                                "type": "string"
                            }
                        ]
                    },
                    "expressions": {
                        "$ref": "#/definitions/Expressions"
                    }
                },
                "required": [
                    "expressions",
                    "name",
                    "syntax"
                ],
                "title": "Property"
            },
            "Expressions": {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                    "Json": {
                        "type": "string"
                    },
                    "JavaScript": {
                        "type": "string"
                    },
                    "Literal": {
                        "type": "string"
                    },
                    "Liquid": {
                        "type": "string"
                    }
                },
                "required": [],
                "title": "Expressions"
            },
            "Connection": {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                    "sourceId": {
                        "type": "string",
                        "format": "uuid"
                    },
                    "targetId": {
                        "type": "string",
                        "format": "uuid"
                    },
                    "outcome": {
                        "type": "string"
                    }
                },
                "required": [
                    "attributes",
                    "outcome",
                    "sourceId",
                    "targetId"
                ],
                "title": "Connection"
            }
        }
    }
