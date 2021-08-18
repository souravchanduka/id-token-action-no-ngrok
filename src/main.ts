import * as core from '@actions/core'
var oidc_client = require('@sourav_chanduka/core-no-ngrok')

async function run(): Promise<void> {
  try {


    const id_token = await oidc_client.getIDToken('api://AzureADTokenExchange')
    core.setOutput('id_token', id_token)


  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
