import { createAccessControl } from "better-auth/plugins/access";

const statement = { 
    campaign: ["create", "view", "update", "delete"],
    video:    ["create", "view", "update", "delete"]
} as const; 

export const ac = createAccessControl(statement); 

export const admin = ac.newRole({
    campaign: ["create", "view", "update", "delete"],
    video:    ["view"]
})

export const designer = ac.newRole({
    video:    ["create", "view", "update", "delete"],
    campaign: ["view"]
})

export const membership = ac.newRole({
    campaign: ["view"]
})

export const billing = ac.newRole({
    campaign: ["view"]
})


