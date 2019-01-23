// GeekAssistant Skill for Amazon Alexa
// Created by Meowcat McMeow XVIII
// Version: 1.0.0 r13 "Live Wire"
// Available under GNU GPL 3.0

// For questions, comments, or requests, send an email
// to meowcat.main@gmail.com

// More information on this skill will be available 
// later this year at:
// https://meowcatsoftware.github.io/geekassist

'use strict';
const Alexa = require('ask-sdk');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speechText = 'Welcome to Geek Assistant. In case you need help, Just say: "Alexa, tell Geek Assistant I need help."';
return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard('GeekAssistant: Home', speechText)
            .getResponse();
    }
};

const VisualModeHandler = {
	canHandle (handlerInput) {
		return handlerInput.requestEnvelope.request.type === 'IntentRequest'
			&& handlerInput.requestEnvelope.request.intent.name === 'Activate_VisualMode'
	},
	handle(handlerInput) {
		const speechText = 'Looks like this isn\'t implemented yet. Head to meowcatsoftware.github.io to check the status of this feature.'
	return handlerInput.responseBuilder
			.speak(speechText)
			.withSimpleCard('GeekAssistant: Error 503', speechText)
	}
}

const DonationHandler = {
	canHandle (handlerInput) {
		return handlerInput.requestEnvelope.request.type === 'IntentRequest'
			&& handlerInput.requestEnvelope.request.intent.name === 'Activate_Donation'
	},
	handle(handlerInput) {
		const speechText = 'Looks like this isn\'t implemented yet. Head to meowcatsoftware.github.io to check the status of this feature.'
	return handlerInput.responseBuilder
			.speak(speechText)
			.withSimpleCard('GeekAssistant: Error 503', speechText)
	}
}

const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'Activate_HelloWorld';
    },
    handle(handlerInput) {
        const speechText = 'Hello! I come in peace, to tell you that the Illuminauti are our friends. No conspiracies here, I promise.';
return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard('GeekAssistant: Hello World', speechText)
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speechText = 'Welcome to geek assistant, the best thing created for geeks since The Hitchhikers Guide to the Universe. To hear some of the features this skill has to offer, you can say: "Alexa, ask Geek Assistant what it can do."';
return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard('GeekAssistant: Introduction', speechText)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
                || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speechText = 'Ok, cancelling...';
return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard('GeekAssistant: STOP', speechText)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        //any cleanup logic goes here
        return handlerInput.responseBuilder.getResponse();
    }
};

const FallbackHandler = {
	canHandle (handlerInput) {
		return handlerInput.requestEnvelope.request.type === 'IntentRequest'
			&& (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.FallbackIntent')
	},
	handle(handlerInput) {
		const speechText = "I didn't exactly catch that. Say again please?"
return handlerInput.responseBuilder
			.speak(speechText)
			.withSimpleCard("GeekAssistant: Misrecognition", speechText)
			.getResponse
	}
}

const ErrorHandler = {
    canHandle() {
      return true;
    },
    handle(handlerInput, error) {
      console.log(`Error handled: ${error.message}`);
return handlerInput.responseBuilder
        .speak('Sorry, I can\'t understand the command. Please say again.')
        .reprompt('Sorry, I still can\'t understand what you\'re saying. Try talking louder or sounding more confident, for some reason I can\'t hear stressed voices very well.')
        .getResponse();
    },
};

exports.handler = Alexa.SkillBuilders.custom()
     .addRequestHandlers(LaunchRequestHandler,
                         HelloWorldIntentHandler,
                         HelpIntentHandler,
                         CancelAndStopIntentHandler,
                         SessionEndedRequestHandler,
						 FallbackHandler,
						 ErrorHandler,
						 )
     .lambda();