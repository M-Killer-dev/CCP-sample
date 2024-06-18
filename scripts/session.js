/**
 * Model the Agent session. Every contact is loaded in the contacts map.
*/
export default {
    // List of concurrent contacts
    contacts: new Map(),
    // Current Routing profile used
    routingProfile: '',
    // Flag to identify if RO file was loaded successfully
    routingProfileFileLoaded: false,
    // Current Queue used to populate the Disposition Codes box
    currentQueueDPLoaded: '',
    // ID of contact that is being viewed by agent (Multi-chat scenario)
    currentContactID: '',
    agent: '',

}
