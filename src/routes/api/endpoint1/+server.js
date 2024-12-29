// @ts-nocheck
import { error, json } from "@sveltejs/kit"
import { writable } from "svelte/store";

// export const GET = async ({ }) => {
//     console.log('testando')
//         return json('1234')
//     }
let xapi = []


    export const POST = async ({ request }) => {
        const selecao = await request.json()
        if(selecao == 'xapi'){ 
            return json(xapi)
        }else{
            xapi = [...xapi, selecao]
            return json('ok')
        }
      
    }