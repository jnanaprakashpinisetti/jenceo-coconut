import React from 'react';
import { useCallback } from 'react';

import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

const surveyJson = {
  "logoPosition": "right",
  "completedBeforeHtml": "<h3>Our records show that you have already Submited this request.</h3>",
  "loadingHtml": "<h3>Submiting...</h3>",
  "pages": [
   {
    "name": "introduction",
    "elements": [
     {
      "type": "text",
      "name": "first-name",
      "title": "First Name",
      "isRequired": true,
      "requiredErrorText": "Enter First Name",
      "validators": [
       {
        "type": "regex",
        "text": "Enter Valid Name",
        "regex": "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
       }
      ],
      "maxLength": 30
     },
     {
      "type": "text",
      "name": "last-name",
      "startWithNewLine": false,
      "title": "Last Name",
      "maxLength": 30
     },
     {
      "type": "text",
      "name": "cell-no",
      "title": "Cell No",
      "isRequired": true,
      "requiredErrorText": "Enter Mobile No",
      "validators": [
       {
        "type": "regex",
        "text": "Enter Valid Mobile No",
        "regex": "^[6-9]\\d{9}$"
       }
      ],
      "inputType": "tel",
      "maxLength": 10,
      "placeholder": "99999 99999"
     },
     {
      "type": "text",
      "name": "mail-id",
      "startWithNewLine": false,
      "title": "Maild",
      "isRequired": true,
      "requiredErrorText": "Enter Mail ID",
      "validators": [
       {
        "type": "email",
        "text": "Enter Valid Mail ID"
       }
      ],
      "inputType": "email",
      "maxLength": 30
     },
     {
      "type": "comment",
      "name": "message",
      "title": "Message"
     }
    ],
    "title": "Send Your Message to Us"
   }
  ],
  "showPageTitles": false,
  "showQuestionNumbers": "off",
  "questionErrorLocation": "bottom",
  "completeText": "Submit"
 }


export default function SendMessage() {
  const survey = new Model(surveyJson);
  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
  }, []);

  survey.onComplete.add(alertResults);
  return (
    <>
      <section className="light-blue">

        <div className="container send-message">
          <div className="row">
            <div className="col-md-12">
              <Survey model={survey} />

            </div>
          </div>
        </div>

        <div className="modal" id="enqury">
    <div className="modal-dialog">
      <div className="modal-content">
      
        <div className="modal-header">
          <h4 className="modal-title">Thankyou for contect US</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        
        <div className="modal-body">
          {/* {results} */}
        </div>
        
        <div className="modal-footer">
          <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>

      </section>

      <section>
        <div className="container map">
          <div className="row">
            <div className="col-md-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.580272636336!2d79.34547557661278!3d13.683267386701498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b19d3f65f0b%3A0x9ceb617526255701!2sTIRUPATI%20BALAJI%20TEMPLE!5e0!3m2!1sen!2sin!4v1690853144756!5m2!1sen!2sin" width="600" height="450" ></iframe>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
