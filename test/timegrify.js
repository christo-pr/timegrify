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
  utilsStub.toMilis.withArgs(parserFixtures.parseMilisValue).returns(timeFixtures.toMilis.return)

  utilsStub.toSec = sandbox.stub()
  utilsStub.toSec.withArgs(parserFixtures.parseSecValue).returns(timeFixtures.toSec.return)

  utilsStub.parseTime = sandbox.stub()
  utilsStub.parseTime.withArgs(parserFixtures.milisValue).returns(parserFixtures.parseMilisValue)
  utilsStub.parseTime.withArgs(parserFixtures.secValue).returns(parserFixtures.parseSecValue)

  Timegrify = proxyquire('../', {
    './src/to-milis': utilsStub.toMilis,
    './src/to-sec': utilsStub.toSec,
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
  t.true(utilsStub.parseTime.calledWith(parserFixtures.milisValue), 'parseTime function should be called with the correct arguments')
  t.true(utilsStub.toMilis.calledWith(parserFixtures.parseMilisValue), 'toMilis function should be called with the parsed arguments')
  t.is(result, timeFixtures.toMilis.return, 'result value correct')
})

test.serial('[Timegrify]: call toSec() function correctly', t => {
  const timegrify = Timegrify(timeFixtures.toSec.value)
  const result = timegrify.toSec()
  t.true(utilsStub.toSec.called, 'toMilis function should be called')
  t.true(utilsStub.parseTime.called, 'parseTime function should be called')
  t.true(utilsStub.parseTime.calledWith(parserFixtures.secValue), 'parseTime function should be called with the correct arguments')
  t.true(utilsStub.toSec.calledWith(parserFixtures.parseSecValue), 'toSec function should be called with parsed arguments')
  t.is(result, timeFixtures.toSec.return, 'result value correct')
})
