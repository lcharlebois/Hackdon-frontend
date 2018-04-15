/**
 * @flow
 * @file
 */
import 'babel-polyfill'
import express from 'express'
import fetch from 'isomorphic-fetch'
import addMiddlewares from './middlewares'
// import httpProxy from 'http-proxy'

import API from './api'
import SSR from './ssr'

var proxy = require('express-http-proxy')

// var proxy = httpProxy.createProxyServer()

global.fetch = fetch

const app: express$Application = express()

// Add global middlewares
addMiddlewares(app)

app.use('/odata', proxy('http://a654mdkhmg6h-wua6.humbledonations.com', {
	userResDecorator: function (proxyRes, proxyResData, userReq, userRes) {
	  var data = proxyResData.toString('utf8')
	  data = data.replace('http://a654mdkhmg6h-wua6.humbledonations.com/', 'http://localhost:5000/odata/')
	  console.log(data)
	  return data
	}
}))

/*
app.all('/odata/*', function (req, res) {
	console.log('redirecting to odata Server1')
	proxy.web(req, res, {
		target: 'http://a654mdkhmg6h-wua6.humbledonations.com',
		pathRewrite: {
			'/odata/': '/' // remove base path
		},
		changeOrigin: true})
}) */

// Add API
app.use('/api', API)
// Add SSR
app.use(SSR)

export default app
