import subscribeToContactEvents from './contactEvents-invisible.js';
import subscribeToAgentEvents from './agentEvents-invisible.js';

/**
 * CCP initialization and Core events
*/
export default function (ccpContainerId) {
    console.debug("CDEBUG >> CCP initialization() - ccpContainerId:", ccpContainerId);
    // Connect information: Replace with your Connect Instance
    // const ccpUrl = "https://deepam-connect-demo.my.connect.aws/connect/ccp-v2";
    const ccpUrl = "https://tbi-test-connect.my.connect.aws/connect/ccp-v2";
    const connectRegion = "us-east-1";

    //----------------Init CCP Start----------------------------
    try {
        connect.core.initCCP(
            document.getElementById(ccpContainerId), {
            ccpUrl: ccpUrl, 	// REQUIRED
            loginPopup: false,				// optional, defaults to `true`
            loginPopupAutoClose: false,		// optional, defaults to `false`
            loginOptions: {                 // optional, if provided opens login in new window
                autoClose: true,              // optional, defaults to `false`
                height: 600,                  // optional, defaults to 578
                width: 400,                   // optional, defaults to 433
                top: 0,                       // optional, defaults to 0
                left: 0                       // optional, defaults to 0
            },

            region: connectRegion,         // REQUIRED for `CHAT`, optional otherwise
            softphone: {                    // optional, defaults below apply if not provided
                allowFramedSoftphone: true,   // optional, defaults to false
                disableRingtone: false,       // optional, defaults to false
                ringtoneUrl: "./ringtone.mp3" // optional, defaults to CCP’s default ringtone if a falsy value is set
            },
            pageOptions: {                  // optional
                enableAudioDeviceSettings: true, // optional, defaults to 'false'
                enablePhoneTypeSettings: true // optional, defaults to 'true'
            },
            ccpAckTimeout: 5000, //optional, defaults to 3000 (ms)
            ccpSynTimeout: 3000, //optional, defaults to 1000 (ms)
            ccpLoadTimeout: 10000 //optional, defaults to 5000 (ms)
        }).then(function (agent) {
            console.log('Amazon Connect CCP initialized successfully for agent:', agent);
                const sub = connect.contact((c) => {
      console.log("adsff       asdf         contacted");
      try {
        if (isCancelled === false) {
          callback(c);
        } else {
          log("was canceled, not calling callback");
        }
      } catch (e) {
        logger.error("connect error", e);
      }
    });
        });
        connect.getLog().warn("CDEBUG >> CCP initialized");
    } catch (err) {
        console.error(logStamp('initCCP'), err);
    }
    //----------------Init CCP Finished----------------------------
    
    // Subscribe to interface events when agent click on other contact tab
    // Event includes ContactID of contact selected

    setTimeout(function() {
    connect.core.onViewContact(
        function (event) {
            console.debug("CDEBUG >> onViewContact() - Now Vieving contact ID: '" + event.contactId + "'");
        }
    );
console.log(connect);
console.log("------contact-------------", connect.contact);
    const sub = connect.contact((c) => {
      console.log("adsff       asdf         contacted");
      try {
        if (isCancelled === false) {
          callback(c);
        } else {
          log("was canceled, not calling callback");
        }
      } catch (e) {
        logger.error("connect error", e);
      }
    });

    console.log("------agent-------------", connect.agent);
    connect.agent(function(agent) {
        console.log("asdfasdfasdfasdf-agent", agent) 
    })

    // Subscribe to Contact events
    connect.contact(subscribeToContactEvents);
    // Subscribe to Agent events
    connect.agent(subscribeToAgentEvents);

    // Send information to the Connect Logger
    connect.getLog().info("CDEBUG >> CCP initialized and subscribed to events");
}, 3000)
}
