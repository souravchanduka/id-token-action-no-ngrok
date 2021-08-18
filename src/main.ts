import * as core from '@actions/core'
var oidc_client = require('@sourav_chanduka/core-no-ngrok')

async function run(): Promise<void> {
  try {


    const id_token1 = await oidc_client.getIDToken()
    core.setOutput('id_token1', id_token1)

    let aud = ''
    const audience = core.getInput('audience', {required: false})
    if (audience !== undefined) aud = `${audience}`

    const id_token2 = await oidc_client.getIDToken(aud)
    core.setOutput('id_token2', id_token2)


  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
