import * as core from '@actions/core'
var oidc_client = require('@sourav_chanduka/core-no-ngrok')

async function run(): Promise<void> {
  try {

    const id_token = await oidc_client.getIDToken()

    const id_token1 = await oidc_client.getIDToken('api://AzureADTokenExchange')
    core.setOutput('id_token', id_token)

    core.setOutput('id_token1', id_token1)


  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
