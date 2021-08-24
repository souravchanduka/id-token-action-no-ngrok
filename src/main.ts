import * as core from '@actions/core'
var oidc_client = require('@sourav_chanduka/core-no-ngrok')

async function run(): Promise<void> {
  try {
    //const id_token = await oidc_client.getIDToken()

    //core.setOutput('id_token', id_token)
    const audience = core.getInput('audience', {required: false})
    const id_token = await oidc_client.getIDToken(audience)

    core.setOutput('id_token', id_token)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
