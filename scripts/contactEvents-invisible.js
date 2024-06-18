import session from './session.js';
import {logInfoMsg} from './index-invisible.js'
import {logInfoEvent} from './index-invisible.js'
/**
 * Extends the contact events.
*/
export default function (contact) {
    console.debug("CDEBUG >> ContactEvents - New Contact contactId: " + contact.contactId);
    console.debug("CDEBUG >> ContactEvents - New Contact InitialContactId(): " + contact.getInitialContactId());
    session.contact = contact;
    logInfoMsg("Subscribing to events for contact");
    if (contact.getActiveInitialConnection()
        && contact.getActiveInitialConnection().getEndpoint()) {
        logInfoMsg("New contact is from " + contact.getActiveInitialConnection().getEndpoint().phoneNumber);
    } else {
        logInfoMsg("This is an existing contact for this agent");
    }
    logInfoMsg("Contact is from queue " + contact.getQueue().name);
    logInfoMsg("Contact attributes are " + JSON.stringify(contact.getAttributes()));

    // Route to the respective handler
    contact.onIncoming(handleContactIncoming);
    contact.onAccepted(handleContactAccepted);
    contact.onConnecting(handleContactConnecting);
    contact.onConnected(handleContactConnected);
    contact.onEnded(handleContactEnded);
    contact.onDestroy(handleContactDestroyed);

    function handleContactIncoming(contact) {
        console.debug('CDEBUG >> ContactEvents.handleContactIncoming');
        logInfoEvent("[contact.onIncoming] Contact is incoming");
        if (contact) {
            logInfoEvent("[contact.onIncoming] Contact is incoming. Contact state is " + contact.getStatus().type);
        } else {
            logInfoEvent("[contact.onIncoming] Contact is incoming. Null contact passed to event handler");
        }
    }

    function handleContactAccepted(contact) {
        console.debug('CDEBUG >> ContactEvents.handleContactAccepted - Contact accepted by agent');
        if (contact) {
            logInfoEvent("[contact.onAccepted] Contact accepted by agent. Contact state is " + contact.getStatus().type);
        } else {
            logInfoEvent("[contact.onAccepted] Contact accepted by agent. Null contact passed to event handler");
        }
    }

    function handleContactConnecting(contact) {
        console.debug('CDEBUG >> ContactEvents.handleContactConnecting() - Contact connecting to agent');
        logInfoEvent("[contact.onConnecting] Contact is connecting");
        if (contact) {
            logInfoEvent("[contact.onConnecting] Contact is connecting. Contact state is " + contact.getStatus().type);
            document.getElementById ('answerDiv').classList.add("glowingButton");
        } else {
            logInfoEvent("[contact.onConnecting] Contact is connecting. Null contact passed to event handler");
        }
    }

    function handleContactConnected(contact) {
        console.debug('CDEBUG >> ContactEvents.handleContactConnected() - Contact connected to agent');
        if (contact) {
            logInfoEvent("[contact.onConnected] Contact connected to agent. Contact state is " + contact.getStatus().type);
            document.getElementById ('answerDiv').classList.remove("glowingButton");
            document.getElementById ('hangupDiv').classList.add("glowingButton");
        } else {
            logInfoEvent("[contact.onConnected] Contact connected to agent. Null contact passed to event handler");
        }
    }

    function handleContactEnded(contact) {
        console.debug('CDEBUG >> ContactEvents.handleContactEnded() - Contact has ended successfully');
        if (contact) {
            logInfoEvent("[contact.onEnded] Contact has ended. Contact state is " + contact.getStatus().type);
            document.getElementById ('hangupDiv').classList.remove("glowingButton");
            document.getElementById ('clearDiv').classList.add("glowingButton");
        } else {
            logInfoEvent("[contact.onEnded] Contact has ended. Null contact passed to event handler");
        }
    }

    function handleContactDestroyed(contact) {
        console.debug('CDEBUG >> ContactEvents.handleContactDestroyed() - Contact will be destroyed');
        logInfoEvent("[contact.onDestroy] Contact is Destroyed");
        if (contact) {
            logInfoEvent("[contact.onDestroy] Contact is destroyed. Contact state is " + contact.getStatus().type);
            document.getElementById ('clearDiv').classList.remove("glowingButton");
        } else {
            logInfoEvent("[contact.onDestroy] Contact is connecting. Null contact passed to event handler");
        }
    }


}
