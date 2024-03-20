/**
 * auth.test.js
 * @description :: contains test cases of APIs for authentication module.
 */

const dotenv = require('dotenv');
dotenv.config();
process.env.NODE_ENV = 'test';
const db = require('mongoose');
const request = require('supertest');
const { MongoClient } = require('mongodb');
const app = require('../../app');
const authConstant = require('../../constants/authConstant');
const uri = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

let insertedWorldData = {};
let insertedUser = {};

/**
 * @description : model dependencies resolver
 */
beforeAll(async function (){
  try {
    await client.connect();
    const dbInstance = client.db('Dhiwise_test');

    const WorldData = dbInstance.collection('WorldData');
    insertedWorldData = await WorldData.insertOne({
      settings: {
        tickUpdate: true,
        Tick: 174,
        data: '2025-01-20T01:42:39.162Z',
        tickRate: 917,
        resolution: 125,
        xres: 465,
        yres: 544,
        z: 753
      },
      code: 'grey',
      img: 'interface',
      title: 'Associate',
      description: 'Ohio',
      x: 183,
      y: 405,
      z: 214,
      l: 904,
      parentPattern: 'PNG',
      pattern: '65ea0bf19586b704bf8b6738',
      sizeMax: '65ea0bf19586b704bf8b6739',
      size: 329,
      innerDiminnerDim: 'Infrastructure',
      id: '65ea0bf19586b704bf8b673a'
    });
    const user = dbInstance.collection('users');
    insertedUser = await user.insertOne({
      username: 'Enola.OConnell',
      password: 'eX2KKaPClygrh1g',
      email: 'Earnestine_Rippin2@yahoo.com',
      name: 'Mrs. Joel Koch',
      userType: 470,
      righthand: 'Money',
      lefthand: 'multi-byte',
      equipedeitens: 'Branding',
      x: 316,
      y: 670,
      z: 898,
      location: '65ea0bf19586b704bf8b6740',
      universe: 'Som',
      apearances: [
        {
          _id: false,
          code: 'Fully-configurable',
          name: 'Angela Walker',
          description: 'Soft',
          equiped: true
        }
      ],
      mobileNo: '(387) 124-0083',
      resetPasswordLink: {},
      loginRetryLimit: 217,
      loginReactiveTime: '2024-09-23T13:52:34.596Z',
      id: '65ea0bf19586b704bf8b6741'
    });
  }
  catch (error) {
    console.error(`we encountered ${error}`);
  }
  finally {
    client.close();
  }
});

// test cases

describe('POST /register -> if email and username is given', () => {
  test('should register a user', async () => {
    let registeredUser = await request(app)
      .post('/admin/auth/register')
      .send({
        'username':'Vicente_Bechtelar67',
        'password':'0BuMaWBKtxE3yij',
        'email':'Lourdes19@hotmail.com',
        'name':'Tyrone Abernathy',
        'userType':authConstant.USER_TYPES.Admin,
        'righthand':'Avon',
        'lefthand':'firewall',
        'equipedeitens':'SMTP',
        'x':249,
        'y':602,
        'z':239,
        'location':insertedWorldData.insertedId,
        'universe':'Cotton',
        'apearances':[{
          '_id':false,
          'code':'California',
          'name':'Domingo Botsford',
          'description':'Switchable',
          'equiped':false
        }],
        'mobileNo':'(245) 652-4005',
        'addedBy':insertedUser.insertedId,
        'updatedBy':insertedUser.insertedId
      });
    expect(registeredUser.statusCode).toBe(200);
    expect(registeredUser.body.status).toBe('SUCCESS');
    expect(registeredUser.body.data).toMatchObject({ id: expect.any(String) });
  });
});

describe('POST /login -> if username and password is correct', () => {
  test('should return user with authentication token', async () => {
    let user = await request(app)
      .post('/admin/auth/login')
      .send(
        {
          username: 'Vicente_Bechtelar67',
          password: '0BuMaWBKtxE3yij'
        }
      );
    expect(user.statusCode).toBe(200);
    expect(user.body.status).toBe('SUCCESS');
    expect(user.body.data).toMatchObject({
      id: expect.any(String),
      token: expect.any(String)
    }); 
  });
});

describe('POST /login -> if username is incorrect', () => {
  test('should return unauthorized status and user not exists', async () => {
    let user = await request(app)
      .post('/admin/auth/login')
      .send(
        {
          username: 'wrong.username',
          password: '0BuMaWBKtxE3yij'
        }
      );

    expect(user.statusCode).toBe(400);
    expect(user.body.status).toBe('BAD_REQUEST');
  });
});

describe('POST /login -> if password is incorrect', () => {
  test('should return unauthorized status and incorrect password', async () => {
    let user = await request(app)
      .post('/admin/auth/login')
      .send(
        {
          username: 'Vicente_Bechtelar67',
          password: 'wrong@password'
        }
      );

    expect(user.statusCode).toBe(400);
    expect(user.body.status).toBe('BAD_REQUEST');
  });
});

describe('POST /login -> if username or password is empty string or has not passed in body', () => {
  test('should return bad request status and insufficient parameters', async () => {
    let user = await request(app)
      .post('/admin/auth/login')
      .send({});

    expect(user.statusCode).toBe(400);
    expect(user.body.status).toBe('BAD_REQUEST');
  });
});

describe('POST /forgot-password -> if email has not passed from request body', () => {
  test('should return bad request status and insufficient parameters', async () => {
    let user = await request(app)
      .post('/admin/auth/forgot-password')
      .send({ email: '' });

    expect(user.statusCode).toBe(400);
    expect(user.body.status).toBe('BAD_REQUEST');
  });
});

describe('POST /forgot-password -> if email passed from request body is not available in database ', () => {
  test('should return record not found status', async () => {
    let user = await request(app)
      .post('/admin/auth/forgot-password')
      .send({ 'email': 'unavailable.email@hotmail.com', });

    expect(user.statusCode).toBe(404);
    expect(user.body.status).toBe('RECORD_NOT_FOUND');
  });
});

describe('POST /forgot-password -> if email passed from request body is valid and OTP sent successfully', () => {
  test('should return success message', async () => {
    let user = await request(app)
      .post('/admin/auth/forgot-password')
      .send({ 'email':'Lourdes19@hotmail.com', });

    expect(user.statusCode).toBe(200);
    expect(user.body.status).toBe('SUCCESS');
  });
});

describe('POST /validate-otp -> OTP is sent in request body and OTP is correct', () => {
  test('should return success', () => {
    return request(app)
      .post('/admin/auth/login')
      .send(
        {
          username: 'Vicente_Bechtelar67',
          password: '0BuMaWBKtxE3yij'
        }).then(login => () => {
        return request(app)
          .get(`/admin/user/${login.body.data.id}`)
          .set({
            Accept: 'application/json',
            Authorization: `Bearer ${login.body.data.token}`
          }).then(foundUser => {
            return request(app)
              .post('/admin/auth/validate-otp')
              .send({ 'otp': foundUser.body.data.resetPasswordLink.code, }).then(user => {
                expect(user.statusCode).toBe(200);
                expect(user.body.status).toBe('SUCCESS');
              });
          });
      });
  });
});

describe('POST /validate-otp -> if OTP is incorrect or OTP has expired', () => {
  test('should return invalid OTP', async () => {
    let user = await request(app)
      .post('/admin/auth/validate-otp')
      .send({ 'otp': '12334' });
    
    expect(user.statusCode).toBe(200);
    expect(user.body.status).toBe('FAILURE');
    
  });
});

describe('POST /validate-otp -> if request body is empty or OTP has not been sent in body', () => {
  test('should return insufficient parameter', async () => {
    let user = await request(app)
      .post('/admin/auth/validate-otp')
      .send({});

    expect(user.statusCode).toBe(400);
    expect(user.body.status).toBe('BAD_REQUEST');
  });
});

describe('PUT /reset-password -> code is sent in request body and code is correct', () => {
  test('should return success', () => {
    return request(app)
      .post('/admin/auth/login')
      .send(
        {
          username: 'Vicente_Bechtelar67',
          password: '0BuMaWBKtxE3yij'
        }).then(login => () => {
        return request(app)
          .get(`/admin/user/${login.body.data.id}`)
          .set({
            Accept: 'application/json',
            Authorization: `Bearer ${login.body.data.token}`
          }).then(foundUser => {
            return request(app)
              .put('/admin/auth/validate-otp')
              .send({
                'code': foundUser.body.data.resetPasswordLink.code,
                'newPassword':'newPassword'
              }).then(user => {
                expect(user.statusCode).toBe(200);
                expect(user.body.status).toBe('SUCCESS');
              });
          });
      });
  });
});

describe('PUT /reset-password -> if request body is empty or code/newPassword is not given', () => {
  test('should return insufficient parameter', async () => {
    let user = await request(app)
      .put('/admin/auth/reset-password')
      .send({});
    
    expect(user.statusCode).toBe(400);
    expect(user.body.status).toBe('BAD_REQUEST');
  });
});

describe('PUT /reset-password -> if code is invalid', () => {
  test('should return invalid code', async () => {
    let user = await request(app)
      .put('/admin/auth/reset-password')
      .send({
        'code': '123',
        'newPassword': 'testPassword'
      });

    expect(user.statusCode).toBe(200);
    expect(user.body.status).toBe('FAILURE');

  });
});

afterAll(function (done) {
  db.connection.db.dropDatabase(function () {
    db.connection.close(function () {
      done();
    });
  });
});
