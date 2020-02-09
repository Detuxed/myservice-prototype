var data = `
  <html>

<head>
  <title>MyService Support Assessment</title>
  <style type="text/css">
    body {
      padding-left: 30px;
      padding-right: 30px;
      line-height: 1.2em;
    }

    h1 {
      font-size: 24px;
    }

    h2 {
      font-size: 20px;
      margin-bottom: 0px;
    }

    .segment {
      page-break-inside: avoid;
      margin-bottom: 25px;
    }

    .page-break {
      page-break-before: always;
    }

    .right {
      text-align: right;
    }

    .italic {
      font-style: italic;
    }

    .center {
      text-align: center;
    }

    table {
      font-family: "Helvetica Neue", Helvetica, Arial, "sans-serif";
      font-size: 11px;
      width: 100%;
    }

    .unboxed-table {
      padding: 15px;
    }

    .boxed-table {
      border: 0.4px solid #666666;
      border-spacing: 0px;
      border-collapse: collapse;
    }

    .boxed-table td,
    .boxed-table th {
      border: 0.4px solid #666666;
      padding: 6px;
    }

    .date-format-spec {
      font-family: "Helvetica Neue", Helvetica, Arial, "sans-serif";
      font-size: 8.6px;
      padding: 0;
      margin-top: -0.75em;
      position: relative;
      color: #888888;
      font-style: italic;
    }

    .shade {
      background-color: #e7e7e7;
    }

    .successShade {
      background-color: #c7ecb0;
      padding-left: 2em;
      padding-top: 2em;
      padding-bottom: 2em;
    }

    .warningShade {
      background-color: #eddf63;
      padding-left: 2em;
      padding-top: 2em;
      padding-bottom: 2em;
    }

    .heavy-shade {
      background-color: #c7c7c7;
    }

    .naClaim {
      background-color: #f1f2f6;
      color: #444444;
    }

    .reviewClaim {
      background-color: #fff5c6;
    }

    .acceptClaim {
      background-color: #c8edb1;
    }

    /* .service-arm {
              border-left: 3px solid black;
          } */

    .blue {
      color: #0C57A4;
      /*some shade of blue*/
    }

    @font-face {
      src: url(file:///C:/Windows/Fonts/L_10646.TTF);
      -fs-pdf-font-embed: embed;
      -fs-pdf-font-encoding: Identity-H;
    }

    .unicode {
      font-family: "Lucida Sans Unicode", Arial, sans-serif;
    }

    tr,
    td {
      word-wrap: break-word;
      word-break: break-all;
    }

    .no-wrap {
      word-wrap: normal;
      word-break: normal;
    }

    .newspaper p {
      text-align: justify;
      overflow-wrap: normal;
      word-break: normal;
    }

    .newspaper,
    .first-col {
      padding-right: 2em;
    }

    .newspaper,
    .second-col {
      padding-left: 2em;
    }

    .needs-table {
      padding-top: 1em;
    }

    .needs-table tr {
      margin-bottom: 2em;
    }

    .no-border {
      border-style: none;
      background-color: transparent;
    }

    .no-border td {
      border-style: none;
    }

  </style>
</head>

<body>
  <table>
    <tr>
      <td width="200"><img src="/docs/images/myservice-logo-blue.svg" height="40" /></td>
      <td colspan="2" class="no-wrap">
        <h1 style="text-align: center;">Support Assessment</h1>
      </td>
      <td class="right"><img src="/docs/images/logo-dva-black.svg" height="40" /></td>
    </tr>
    <tr>
      <td colspan="4" class="italic center">This is an automatically generated document from MyService BETA.
        Please contact generalenquiries@dva.gov.au if assistance is required.</td>
    </tr>
    <tr>
      <td colspan="4" class="successShade"><img src="/docs/images/icon-tick.png" width="15" alt="POI tick icon" />&#160;&#160;<strong>Proof of identity has been provided and
          verified through
          MyService</strong></td>
    </tr>
  </table>

  <div style="margin-top: 25px;" class="ui segment">
    <table>
      <tr>
        <td>
          <h2>Client details</h2>
        </td>
        <td class="right">Received date: <span>YYYY-MM-DD</span>
        </td>
      </tr>
    </table>
    <table class="boxed-table">
      <tr>
        <td class="shade" width="200">First name: </td>
        <td> </td>
      </tr>
      <tr>
        <td class="shade">Middle name:</td>
        <td> </td>
      </tr>
      <tr>
        <td class="shade">Given name:</td>
        <td> </td>
      </tr>
      <tr>
        <td class="shade">Highest rank achieved:</td>
        <td> </td>
      </tr>
      <tr>
        <td class="shade">Title:</td>
        <td> </td>
      </tr>
      <tr>
        <td class="shade">DOB:</td>
        <td> </td>
      </tr>
      <tr>
        <td class="shade">Email:</td>
        <td> </td>
      </tr>
      <tr>
        <td class="shade">Phone:</td>
        <td>

        </td>
      </tr>
      <tr>
        <td class="shade">Postal address:</td>
        <td>

        </td>
      </tr>
      <tr>
        <td class="shade">Residential address:</td>
        <td>

        </td>
      </tr>
      <tr>
        <td class="shade">Relationship status:</td>
        <td></td>
      </tr>
      <tr>
        <td class="shade">Signature:</td>
        <td></td>
      </tr>
      <tr>
        <td class="shade">Representation:</td>
        <td> </td>
      </tr>
    </table>
    <br />
  </div>
  <div class="ui">
    <div class="segment">
      <table>
        <tr>
          <td>
            <h2>Service details</h2>
          </td>
        </tr>
      </table>
      <table class="boxed-table">
        <tr>
          <td class="shade" width="200">PMKeyS:</td>
          <td> </td>
        </tr>
        <tr>
          <td class="shade">Enlistment date:</td>
          <td> </td>
        </tr>
      </table>
    </div>
    <br />
    <div>
      <div class="service-arm">
        <table class="boxed-table segment">
          <tr>
            <td class="shade" width="200">Branch of service:</td>
            <td> </td>
          </tr>
          <tr>
            <td class="shade">Service type:</td>
            <td> </td>
          </tr>
          <tr>
            <td class="shade">Start date:</td>
            <td> </td>
          </tr>
          <tr>
            <td class="shade">End date:</td>
            <td> </td>
          </tr>
        </table>
        <br />
        <table class="boxed-table segment">
          <tr>
            <th class="heavy-shade" colspan="3">Operations history</th>
          </tr>
          <tr>
            <th class="shade" width="200">Name of operational service</th>
            <th class="shade">Start date</th>
            <th class="shade">End date</th>
          </tr>
          <tr>
            <td>op.description</td>
            <td>op.startDate</td>
            <td>op.endDate</td>
          </tr>
        </table>
        <br />
        <table class="boxed-table segment">
          <tr>
            <th class="heavy-shade" colspan="3">Separation history</th>
          </tr>
          <tr>
            <th class="shade" width="200">Date of separation</th>
            <th class="shade">Reason for separation</th>
            <th class="shade">Action</th>
          </tr>
          <tr>
            <td>esd.date</td>
            <td>esd.reason</td>
            <td>esd.action</td>
          </tr>
        </table>
      </div>
      <br />
    </div>
  </div>

  <div class="ui segment">
    <table>
      <tr>
        <td>
          <h2>Mobility</h2>
        </td>
      </tr>
    </table>
    <table class="boxed-table">
      <tr>
        <td class="shade" width="200">Is your ability to move around when undertaking your usual activities affected?</td>
        <td>
          ${sessionStorage.getItem("move-ability")}
        </td>
      </tr>
      <tr>
        <td class="shade" width="200">Do you need the assistance of an aid to help you get around?</td>
        <td>
          ${sessionStorage.getItem("move-aid")}
        </td>
      </tr>
      <tr>
        <td class="shade" width="200">Do you require assistance to travel?</td>
        <td>
          ${sessionStorage.getItem("travel-aid")}
        </td>
      </tr>
      <tr>
        <td class="shade" width="200">Do your conditions restrict you to your home?</td>
        <td>
          ${sessionStorage.getItem("home-restricted")}
        </td>
      </tr>
      <tr>
        <td class="shade" width="200">The more detail you provide the more we can understand how we may be able to support you.</td>
        <td>
          ${sessionStorage.getItem("mobility-deta")}
        </td>
      </tr>
    </table>
  </div>

  <div class="ui segment">
    <table>
      <tr>
        <td>
          <h2>Recreational activities</h2>
        </td>
      </tr>
    </table>
    <table class="boxed-table">
      <tr>
        <td class="shade" width="200">Have you given up any recreational activities?
</td>
        <td>
          ${sessionStorage.getItem("recreational-given-up")}
        </td>
      </tr>
      <tr>
        <td class="shade" width="200">Have you reduced your involvement in any recreational activities?</td>
        <td>
          ${sessionStorage.getItem("recreational-reduced")}
        </td>
      </tr>
      <tr>
        <td class="shade" width="200">Are there activities you planned to undertake but now cannot?</td>
        <td>
          ${sessionStorage.getItem("activities-cannot-undertake")}
        </td>
      </tr>
      <tr>
        <td class="shade" width="200">The more detail you provide the more we can understand how we may be able to support you.</td>
        <td>
          ${sessionStorage.getItem("recreational-deta")}
        </td>
      </tr>
    </table>
  </div>

  <div class="ui segment">
    <table>
      <tr>
        <td>
          <h2>Personal relationships</h2>
        </td>
      </tr>
    </table>

    <table class="boxed-table">
      <tr>
        <td class="shade" width="200">Is your social life affected?</td>
        <td> ${sessionStorage.getItem("social-affected")}</td>
      </tr>
      <tr>
        <td class="shade" width="200">Are your daily interactions with people affected?</td>
        <td> ${sessionStorage.getItem("interactions-affected")}</td>
      </tr>
      <tr>
        <td class="shade" width="200">Is your ability to form or maintain intimate relationships affected?</td>
        <td> ${sessionStorage.getItem("intimate-affected")}</td>
      </tr>
      <tr>
        <td class="shade" width="200">Do you require assistance with personal care?</td>
        <td> ${sessionStorage.getItem("personal-assistance")}</td>
      </tr>
      <tr>
        <td class="shade" width="200">Has your connection to the community been affected?</td>
        <td> ${sessionStorage.getItem("community-connection")}</td>
      </tr>
      <tr>
        <td class="shade" width="200">The more detail you provide the more we can understand how we may be able to support you.</td>
        <td>
          ${sessionStorage.getItem("relationship-detai")}
        </td>
      </tr>
    </table>
  </div>

  <div class="ui segment">
    <table>
      <tr>
        <td>
          <h2>Domestic activities</h2>
        </td>
      </tr>
    </table>

    <table class="boxed-table">
      <tr>
        <td class="shade" width="200">Does it take longer for you to complete your domestic activities?</td>
        <td> ${sessionStorage.getItem("domestic-longer")}</td>
      </tr>
      <tr>
        <td class="shade" width="200">Do you need help with domestic activities?
</td>
        <td> ${sessionStorage.getItem("domestic-help")}</td>
      </tr>
      <tr>
        <td class="shade" width="200">Have you had to stop performing any domestic activities?</td>
        <td> ${sessionStorage.getItem("domestic-stop")}</td>
      </tr>
      <tr>
        <td class="shade" width="200">Have your immediate family taken over any domestic activities you normally undertook?
</td>
        <td> ${sessionStorage.getItem("domestic-family")}</td>
      </tr>
      <tr>
        <td class="shade" width="200">The more detail you provide the more we can understand how we may be able to support you.</td>
        <td>
          ${sessionStorage.getItem("domestic-detai")}
        </td>
      </tr>
    </table>
  </div>

  <div class="ui segment">
    <table>
      <tr>
        <td>
          <h2>Employment</h2>
        </td>
      </tr>
    </table>

    <table class="boxed-table">
      <tr>
        <td class="shade" width="200">Are you employed?</td>
        <td> ${sessionStorage.getItem("is-employed")}</td>
      </tr>
      <tr>
        <td class="shade" width="200">Has the way you work been affected?
</td>
        <td> ${sessionStorage.getItem("work-affected")}</td>
      </tr>
      <tr>
        <td class="shade" width="200">Have your duties or responsibilities changed?</td>
        <td> ${sessionStorage.getItem("duties-changed")}</td>
      </tr>
      <tr>
        <td class="shade" width="200">Have your work hours reduced or changed?
</td>
        <td> ${sessionStorage.getItem("work-reduced")}</td>
      </tr>
      <tr>
        <td class="shade" width="200">Have you had to change jobs?</td>
        <td>
          ${sessionStorage.getItem("changed-jobs")}
        </td>
      </tr>
      <tr>
        <td class="shade" width="200">Have you had a reduction in pay?</td>
        <td>
          ${sessionStorage.getItem("pay-reduction")}
        </td>
      </tr>
      <tr>
        <td class="shade" width="200">Are you concerned you may lose your job?</td>
        <td>
          ${sessionStorage.getItem("job-loss")}
        </td>
      </tr>
      <tr>
        <td class="shade" width="200">Are your promotional opportunities restricted?</td>
        <td>
          ${sessionStorage.getItem("promotional-restricted")}
        </td>
      </tr>
      <tr>
        <td class="shade" width="200">Do you believe you can be more effective in your job if you had additional suport/training to better manage your conditions?</td>
        <td>
          ${sessionStorage.getItem("job-effective")}
        </td>
      </tr>
      <tr>
        <td class="shade" width="200">Have your conditions affected your ability to work?</td>
        <td>
          ${sessionStorage.getItem("work-ability")}
        </td>
      </tr>
      <tr>
        <td class="shade" width="200">Have you had any retraining to help you gain or retain employment?</td>
        <td>
          ${sessionStorage.getItem("retain-employment")}
        </td>
      </tr>
      <tr>
        <td class="shade" width="200">Have you lost a job (excluding any medical discharge from the ADF) because of your conditions?</td>
        <td>
          ${sessionStorage.getItem("job-lost")}
        </td>
      </tr>
      <tr>
        <td class="shade" width="200">The more detail you provide the more we can understand how we may be able to support you.</td>
        <td>
          ${sessionStorage.getItem("employment-detai")}
        </td>
      </tr>
    </table>
  </div>

  <div class="ui segment">
    <table>
      <tr>
        <td>
          <h2>Treatments</h2>
        </td>
      </tr>
    </table>

    <table class="boxed-table">
      <tr>
        <td class="shade" width="200">Have you undertaken any treatment from your conditions?</td>
        <td> ${sessionStorage.getItem("undertaken-treatment")}</td>
      </tr>
      <tr>
        <td class="shade" width="200">Are you still undergoing treatment?</td>
        <td> ${sessionStorage.getItem("social-affected")}</td>
      </tr>
      <tr>
        <td class="shade" width="200"Have you been advised that further treatment will not improve your conditions?</td>
        <td> ${sessionStorage.getItem("been-advised")}</td>
      </tr>
      <tr>
        <td class="shade" width="200">Tell us in your own words any other impacts of your condition that have not been already covered.

       </td>
        <td> ${sessionStorage.getItem("interactions-affected")}</td>
      </tr>
    </table>
  </div>


  <div class="ui segment newspaper page-break">
    <hr />
    <table>
      <tr>
        <td>
          <h2>Consent to release information</h2>
        </td>
      </tr>
      <tr>
        <td valign="top" align="left">
          <p>I consent to the release of medical, clinical or other information to the Department by any
            medical practitioner, hospital, clinic, insurance company, Centrelink, the Department of Defence
            or other organisation, in relation to this claim or its review.</p>
          <p>Any claim lodged via MyService is bound by the terms and conditions for use including
            authorisation of release and sharing of information relevant to the claimed condition. The
            client does not need to provide a signature on any documentation once registration has completed
            as this includes a Proof of Identity verification.</p>
          <p>The authority to obtain information relevant to your claim is contained in the provisions of the
            <em>Military Rehabilitation and Compensation Act 2004 (MRCA)</em>, <em>Veterans' Entitlements
              Act 1986 (VEA)</em> and the <em>Safety, Rehabilitation and Compensation (Defence-related
              Claims) Act 1988 (DRCA)</em>.</p>
          <p>I authorise the Department to consider my claim under one or more of the Acts above. I understand
            the information sought on the claim form is required to assess my eligibility for compensation
            under all Acts (VEA, DRCA and MRCA) that may be applicable to the injury or disease which I am
            now claiming.</p>
        </td>
      </tr>
    </table>
  </div>

</body>

</html>

    `;

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "myservice.prototype@gmail.com",
    Password: "Myserviceoh.012",
    To: "myservice.prototype@gmail.com",
    From: "myservice.prototype@gmail.com ",
    Subject: "Support Assessment - A",
    Body: data
  }).then(message => alert(message));
}
