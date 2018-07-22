'use strict'

const test = require('ava')

const sinon = require('sinon')
const proxyquire = require('proxyquire')
const timeFixtures = require('./fixtures/time')
const parserFixtures = require('./fixtures/parser')

let utilsStub = null
let sandbox = null
let Timegrify = null

test.beforeEach(() => {
  sandbox = sinon.createSandbox()

  utilsStub = {}
  utilsStub.toMilis = sandbox.stub()
  utilsStub.toMilis.withArgs(timeFixtures.toMilis.value).returns(timeFixtures.toMilis.return)

  utilsStub.parseTime = sandbox.stub()
  utilsStub.parseTime.withArgs(parserFixtures.value).returns(parserFixtures.parseTime(parserFixtures.value))

  Timegrify = proxyquire('../', {
    './src/to-milis': utilsStub.toMilis,
    './src/parse-time': utilsStub.parseTime
  })
})
test.afterEach(() => {
  sandbox && sandbox.restore()
})

test('[Timegrify]: returns itself', t => {
  t.truthy(Timegrify)
})

test.serial('[Timegrify]: call toMilis() function correctly', t => {
  const timegrify = Timegrify(timeFixtures.toMilis.value)
  const result = timegrify.toMilis()
  t.true(utilsStub.toMilis.called, 'toMilis function should be called')
  t.true(utilsStub.parseTime.called, 'parseTime function should be called')
  t.true(utilsStub.parseTime.calledWith(parserFixtures.value), 'parseTime function should be called with the correct arguments')
  t.true(utilsStub.toMilis.calledWith(timeFixtures.toMilis.value), 'toMilis function should be called with the same arguments as class constructor')
  t.is(result, timeFixtures.toMilis.return, 'result value correct')
})
