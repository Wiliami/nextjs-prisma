import { createAccessControl } from "better-auth/plugins/access";

const statement = { 
    campaign: ["create", "view", "update", "delete"], 
} as const; 

export const ac = createAccessControl(statement); 

export const admin = ac.newRole({
    campaign: ["create", "view", "update", "delete"]
})
