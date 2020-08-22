import { useAgents } from './BusinessProvider.js'
import { singleAgent } from './Agent.js'

const agentInfo = useAgents()
const agentInfoUI = document.querySelector('.agent-list')
//agentInfoUI.innerHTML = `<h2>Purchasing Agents</h2>`

export const agentList = () => {
  agentInfo.forEach(agent => {
    agentInfoUI.innerHTML += singleAgent(agent)
  })
  return agentInfoUI
}