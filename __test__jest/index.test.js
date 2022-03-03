const { TestWatcher } = require('jest')
const request = require('supertest')

const app = require('../app.js')

// describe("POST /users/register", () => {
//     test("OK, Registration is succefull", async () => {
//         const res = await request(app)
//             .post('/users/register')
//             .send({
//                 "fname":"chaitali",
//                 "email":"chaitali@gmail.com",
//                 "password": "chaitali",
//                 "role":"user",
//                 "date":"2-2-2022",
//                 "sampleId":"1",
//                 "haemotology":null,
//                 "thyroid":null,
//                 "glucometry":null
//             })
//         console.log(res);
//         expect(res.statusCode).toEqual(200)
//     }, 10000)
// })

// describe("POST /users/login",()=>{
//    test("OK, Login is Succefull", async ()=>{
//        const res = await request(app)
//                         .post('/users/login')
//                         .send({
//                             "email":"chaitali@gmail.com",
//                             "password":"chaitali"
//                         })
//                    console.log(res);
//                    expect(res.statusCode).toEqual(200)

//    },10000)
// })

describe("GET /users/getAllSamples",()=>{
    var token= null;
    beforeEach((done)=>{
        request(app)
          .post('/users/login')
          .send({
            "email":"chaitali@gmail.com",
            "password":"chaitali"
          })
          .end((err,res)=>{
              token = res._body.data.token
              console.log(token);
              done()
          })
    })

    test("OK, samples getting done", async ()=>{
        const res = await request(app)
                          .get('/users/getAllSamples')
                        //   .set("Authorization" , 'Bearer ' + token)
                    console.log(res);
                    expect(res.statusCode).toEqual(200)
    },20000)
})



