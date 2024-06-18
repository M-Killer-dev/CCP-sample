
/**
 * Extends the agent events.
*/
export default function (agent) {
    // Show the CCP container once tthe agent is logged in
    console.log("CDEBUG >> agentEvents");
    
    //session.agent = agent;
    agent.onRefresh(handleAgentRefresh);
    agent.onStateChange(handleAgentStateChange);
    agent.onRoutable(handleRoutable);
    agent.onNotRoutable(handleNotRoutable);
    agent.onOffline(handleAgentOffline);
    agent.onSoftphoneError(handleSoftphoneError);
    agent.onWebSocketConnectionLost(handleWebSocketConnectionLost);
    agent.onWebSocketConnectionGained(handleWebSocketConnectionGained);
    agent.onAfterCallWork(handleAfterCallWork);


    // Agent handlers
    function handleAgentRefresh(agent) {
        console.debug("CDEBUG >> handleAgentRefresh()");
    }

    function handleAgentStateChange(agent) {
        console.debug("CDEBUG >> handleAgentStateChange()");
    }

    function handleRoutable(agent) {
        console.debug("CDEBUG >> handleRoutable()");
    }

    function handleNotRoutable(agent) {
        console.debug("CDEBUG >> handleNotRoutable()");
    }

    function handleAgentOffline(agent) {
        console.debug("CDEBUG >> handleAgentOffline()");
    }

    function handleSoftphoneError(agent) {
        console.debug("CDEBUG >> handleSoftphoneError()");
    }

    function handleWebSocketConnectionLost(agent) {
        console.debug("CDEBUG >> handleWebSocketConnectionLost()");
    }

    function handleWebSocketConnectionGained(agent) {
        console.debug("CDEBUG >> handleWebSocketConnectionGained()");
    }

    function handleAfterCallWork(agent) {
        console.debug("CDEBUG >> handleAfterCallWork()");
    }

}