import { Actions } from "./Actions.js";

function test1() {
    Actions.visitUrl('www.hishmeh.com')
}



async function test3() {
    try{
       const visit = await Actions.visitUrl('www.facebook.com')
       console.log(visit)

        const login = await Actions.login('TechGlobal', 'Test1234')
        console.log(login)

       const validate =  await Actions.validateTitle('HarryPotter')
       console.log(validate)

    }
    catch(err) {
        console.log(err)
    }
  
} 

test3()