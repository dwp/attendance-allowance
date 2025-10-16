const express = require('express');

const router = express.Router();
const controllers = require('../controllers/sprint-123');
const { urls } = require('../utils/constants');

// start
router.use(urls.root, controllers.verificationCode);
router.use(`/${urls.start}`, controllers.start);
router.use(`/${urls.beforeYouStart}`, controllers.beforeYouStart);
router.use(`/${urls.beforeYouStartIneligible}`, controllers.beforeYouStartIneligible);
router.use(`/${urls.helpingSomeoneIntro}`, controllers.helpingSomeoneIntro);

// govuk
router.use(urls.root, controllers.overview);
router.use(urls.root, controllers.whatYoullGet);
router.use(urls.root, controllers.eligibility);
router.use(urls.root, controllers.howToClaim);
router.use(urls.root, controllers.reportChangeInCircumstances);

// govuk
router.use(urls.limitReached, controllers.limitReached);

// visiting service
router.use(`/${urls.effectiveDate}`, controllers.effectiveDate);

// claim type
router.use(`/${urls.claimType}`, controllers.claimType);
router.use(`/${urls.claimTypeChangeInCircumstances}`, controllers.claimTypeChangeInCircumstances);
router.use(`/${urls.claimTypeRenewal}`, controllers.claimTypeRenewal);

// eligibility
router.use(`/${urls.whoIsApplying}`, controllers.whoIsApplying);
router.use(`/${urls.applyingSomeoneElse}`, controllers.applyingSomeoneElse);
router.use(`/${urls.whoIsApplyingIneligible}`, controllers.whoIsApplyingIneligible);
router.use(`/${urls.personClaimingIneligible}`, controllers.personClaimingIneligible);
router.use(`/${urls.organisationClaimingIneligible}`, controllers.organisationClaimingIneligible);
router.use(`/${urls.bestDescribe}`, controllers.bestDescribe);
router.use(`/${urls.becomingAnAppointee}`, controllers.becomingAnAppointee);
router.use(`/${urls.manageOwnAffairs}`, controllers.manageOwnAffairs);
router.use(`/${urls.manageOwnAffairsIneligible}`, controllers.manageOwnAffairsIneligible);
router.use(`/${urls.manageOwnAffairsAuthority}`, controllers.manageOwnAffairsAuthority);
router.use(`/${urls.manageOwnAffairsSomeoneElse}`, controllers.manageOwnAffairsSomeoneElse);
router.use(`/${urls.helperName}`, controllers.helperName);
router.use(`/${urls.birthDate}`, controllers.birthDate);
router.use(`/${urls.birthDateIneligible}`, controllers.birthDateIneligible);
router.use(`/${urls.otherBenefits}`, controllers.otherBenefits);
router.use(`/${urls.otherBenefitsIneligible}`, controllers.otherBenefitsIneligible);
router.use(`/${urls.pipIneligible}`, controllers.pipIneligible);
router.use(`/${urls.dlaIneligible}`, controllers.dlaIneligible);
router.use(`/${urls.adpIneligible}`, controllers.adpIneligible);
router.use(`/${urls.attendanceAllowanceIneligible}`, controllers.attendanceAllowanceIneligible);
router.use(`/${urls.nationality}`, controllers.nationality);
router.use(`/${urls.nationalityOther}`, controllers.nationalityOther);
router.use(`/${urls.livingInUk}`, controllers.livingInUk);
router.use(`/${urls.residenceCountry}`, controllers.residenceCountry);
router.use(`/${urls.previousResidenceScotland}`, controllers.previousResidenceScotland);
router.use(`/${urls.previousClaimPadp}`, controllers.previousClaimPadp);
router.use(`/${urls.countryOutsideUKDuration}`, controllers.countryOutsideUkDuration);
router.use(`/${urls.countryOutsideUKBenefits}`, controllers.countryOutsideUkBenefits);
router.use(`/${urls.countryOutsideUKWorking}`, controllers.countryOutsideUkWorking);

// official capacity
router.use(`/${urls.representativeIntro}`, controllers.representativeIntro);
router.use(`/${urls.representativeContactInformation}`, controllers.representativeContactInformation);
router.use(`/${urls.representativeName}`, controllers.representativeName);
router.use(`/${urls.representativeNationalInsurance}`, controllers.representativeNationalInsurance);
router.use(`/${urls.representativeBirthDate}`, controllers.representativeBirthDate);
router.use(`/${urls.representativeAddress}`, controllers.representativeAddress);
router.use(`/${urls.representativeAddressPostcode}`, controllers.representativeAddressPostcode);
router.use(`/${urls.representativeAddressSelect}`, controllers.representativeAddressSelect);
router.use(`/${urls.representativeAddressManual}`, controllers.representativeAddressManual);
router.use(`/${urls.representativeAddressInternational}`, controllers.representativeAddressInternational);
router.use(`/${urls.representativeTelephoneNumber}`, controllers.representativeTelephoneNumber);

// identity
router.use(`/${urls.nationalInsurance}`, controllers.nationalInsurance);
router.use(`/${urls.fullName}`, controllers.fullName);
router.use(`/${urls.homeAddressPostcode}`, controllers.homeAddressPostCode);
router.use(`/${urls.homeAddressSelect}`, controllers.homeAddressSelect);
router.use(`/${urls.homeAddressManual}`, controllers.homeAddressManual);
router.use(`/${urls.homeAddressInternational}`, controllers.homeAddressInternational);
router.use(`/${urls.homeAddressPostcodeScotland}`, controllers.homeAddressPostcodeScotland);

// payability
router.use(`/${urls.careHomeHospital}`, controllers.careHomeHospital);
router.use(`/${urls.hospitalAddress}`, controllers.hospitalAddress);
router.use(`/${urls.careHomeAddress}`, controllers.careHomeAddress);
router.use(`/${urls.hospiceAddress}`, controllers.hospiceAddress);
router.use(`/${urls.similarPlaceAddress}`, controllers.similarPlaceAddress);
router.use(`/${urls.careHomeFunding}`, controllers.careHomeFunding);
router.use(`/${urls.careHomeFundingWho}`, controllers.careHomeFundingWho);
router.use(`/${urls.careHomeFundingTrusts}`, controllers.careHomeFundingTrusts);
router.use(`/${urls.careHomeHospitalAdmissionDate}`, controllers.careHomeHospitalAdmissionDate);
router.use(`/${urls.hospitalAdmissionDate}`, controllers.hospitalAdmissionDate);
router.use(`/${urls.careHomeAdmissionDate}`, controllers.careHomeAdmissionDate);
router.use(`/${urls.hospiceAdmissionDate}`, controllers.hospiceAdmissionDate);
router.use(`/${urls.hospitalFunding}`, controllers.hospitalFunding);
router.use(`/${urls.careHomeHospitalOvernight}`, controllers.careHomeHospitalOvernight);
router.use(`/${urls.careHomeHospitalOvernightInformation}`, controllers.careHomeHospitalOvernightInformation);
router.use(`/${urls.accommodationAddressOutsideUk}`, controllers.accommodationAddressOutsideUK);
router.use(`/${urls.sercoCareHomeHospital}`, controllers.sercoCareHomeHospital);

// special rules
router.use(`/${urls.specialRulesDeclaration}`, controllers.specialRulesDeclaration);
router.use(`/${urls.specialRulesFormCompleted}`, controllers.specialRulesFormCompleted);
router.use(`/${urls.specialRulesFormSent}`, controllers.specialRulesFormSent);
router.use(`/${urls.specialRulesFormUploadOption}`, controllers.specialRulesFormUploadOption);
router.use(`/${urls.specialRulesFormType}`, controllers.specialRulesFormType);
router.use(`/${urls.specialRulesFormGuidance}`, controllers.specialRulesFormGuidance);
router.use(`/${urls.specialRulesFormUpload}`, controllers.specialRulesFormUpload);
router.use(`/${urls.specialRulesFormAdded}`, controllers.specialRulesFormAdded);
router.use(`/${urls.specialRulesFormRemove}`, (req, res) => {
  req.session.data['special-rules-form-upload'] = req.session.data['special-rules-form-upload'] = undefined;
  req.session.data['special-rules-form-upload-rows'] = req.session.data['special-rules-form-upload-rows'].filter((e) => {
    const uploadRemove = e?.key?.text.toLowerCase().replace(/[^a-z0-9]/gi, '')
    return uploadRemove !== req?.query?.remove
  })
  if (req.session.data['special-rules-form-upload-rows'].length > 0) {
    return res.redirect(`${urls.specialRulesFormAdded}`);
  }
  return res.redirect(`${urls.specialRulesFormUpload}`);
});


// health conditions
router.use(`/${urls.healthConditions}`, controllers.healthConditions);
router.use(`/${urls.healthConditionsManual}`, controllers.healthConditionsManual);
router.use(`/${urls.healthConditionsAdded}`, controllers.healthConditionsAdded);
router.use(`/${urls.healthConditionsRemove}`, (req, res) => {
  req.session.data['health-conditions'] = undefined;
  req.session.data['health-conditions-start-date'] = undefined;
  req.session.data['health-conditions-manual'] = undefined;
  req.session.data['health-conditions-rows'] = req.session.data['health-conditions-rows'].filter((e) => e?.[0]?.text.toLowerCase().replace(/[^a-z0-9]/gi, '') !== req?.query?.remove);
  if (req.session.data['health-conditions-rows'].length > 0) {
    return res.redirect(`${urls.healthConditionsAdded}`);
  }
  return res.redirect(`${urls.healthConditions}`);
});

// illness and disabilities
router.use(`/${urls.illnessDisability}`, controllers.illnessDisability);
router.use(`/${urls.illnessDisabilityDate}`, controllers.illnessDisabilityDate);
router.use(`/${urls.illnessDisabilityDateManual}`, controllers.illnessDisabilityDateManual);
router.use(`/${urls.illnessDisabilityAdded}`, controllers.illnessDisabilityAdded);
router.use(`/${urls.illnessDisabilityManual}`, controllers.illnessDisabilityManual);
router.use(`/${urls.illnessDisabilityRemove}`, (req, res) => {
  req.session.data['illness-disability'] = req.session.data['illness-disability'].filter((e) => e.toLowerCase().replace(/[^a-z0-9]/gi, '') !== req?.query?.remove);
  req.session.data['illness-disability-rows'] = req.session.data['illness-disability-rows'].filter((e) => e?.[0]?.text.toLowerCase().replace(/[^a-z0-9]/gi, '') !== req?.query?.remove);
  return res.redirect(`${urls.illnessDisability}`);
});


// renal dyalisis
router.use(`/${urls.renalDialysis}`, controllers.renalDialysis);
router.use(`/${urls.renalDialysisWhere}`, controllers.renalDialysisWhere);
router.use(`/${urls.renalDialysisWhen}`, controllers.renalDialysisWhen);
router.use(`/${urls.renalDialysisFrequency}`, controllers.renalDialysisFrequency);
router.use(`/${urls.renalDialysisHelp}`, controllers.renalDialysisHelp);

// surgery or treatment
router.use(`/${urls.treatmentSurgery}`, controllers.treatmentSurgery);
router.use(`/${urls.treatmentSurgeryInformation}`, controllers.treatmentSurgeryInformation);

// supporting documents
router.use(`/${urls.supportingDocumentsIntro}`, controllers.supportingDocumentsIntro);
router.use(`/${urls.supportingDocumentsOptions}`, controllers.supportingDocumentsOptions);
router.use(`/${urls.supportingDocumentsGuidance}`, controllers.supportingDocumentsGuidance);
router.use(`/${urls.supportingDocumentsUpload}`, controllers.supportingDocumentsUpload);
router.use(`/${urls.supportingDocumentsAdded}`, controllers.supportingDocumentsAdded);
router.use(`/${urls.supportingDocumentsEmailLink}`, controllers.supportingDocumentsEmailLink);
router.use(`/${urls.supportingDocumentsEmailAddress}`, controllers.supportingDocumentsEmailAddress);
router.use(`/${urls.supportingDocumentsUploadLater}`, controllers.supportingDocumentsUploadLater);
router.use(`/${urls.supportingDocumentsPost}`, controllers.supportingDocumentsPost);
router.use(`/${urls.supportingDocumentsNone}`, controllers.supportingDocumentsNone);
router.use(`/${urls.supportingDocumentsRemove}`, (req, res) => {
  req.session.data['supporting-documents-upload'] = req.session.data['supporting-documents-upload'] = undefined;
  req.session.data['supporting-documents-upload-rows'] = req.session.data['supporting-documents-upload-rows'].filter((e) => {
    const uploadRemove = e?.key?.text.toLowerCase().replace(/[^a-z0-9]/gi, '')
    return uploadRemove !== req?.query?.remove
  })
  if (req.session.data['supporting-documents-upload-rows'].length > 0) {
    return res.redirect(`${urls.supportingDocumentsAdded}`);
  }
  return res.redirect(`${urls.supportingDocumentsUpload}`);
});

// consent
router.use(`/${urls.consent}`, controllers.consent);
router.use(`/${urls.gpDetails}`, controllers.gpDetails);
router.use(`/${urls.healthcareProfessionalAdd}`, controllers.healthcareProfessionalAdd);
router.use(`/${urls.healthcareProfessionalOptions}`, controllers.healthcareProfessionalOptions);
router.use(`/${urls.healthcareProfessionalDetails}`, controllers.healthcareProfessionalDetails);
router.use(`/${urls.surgeryMedicalCentre}`, controllers.surgeryMedicalCentre);
router.use(`/${urls.surgeryMedicalCentreOutsideUk}`, controllers.surgeryMedicalCentreOutsideUk);
router.use(`/${urls.evidence}`, controllers.evidence);

// care needs daytime
router.use(`/${urls.dayDifficulties}`, controllers.dayDifficulties);
router.use(`/${urls.difficultiesStartDate}`, controllers.difficultiesStartDate);
router.use(`/${urls.bedDay}`, controllers.bedDay);
router.use(`/${urls.bedDayWhy}`, controllers.bedDayWhy);
router.use(`/${urls.returnBedDay}`, controllers.returnBedDay);
router.use(`/${urls.washDay}`, controllers.washDay);
router.use(`/${urls.washDayWhy}`, controllers.washDayWhy);
router.use(`/${urls.additinalWashDay}`, controllers.additionalWashDay);
router.use(`/${urls.dressDay}`, controllers.dressDay);
router.use(`/${urls.dressDayWhy}`, controllers.dressDayWhy);
router.use(`/${urls.additionalDressDay}`, controllers.additionalDressDay);
router.use(`/${urls.movingIndoorsDay}`, controllers.movingIndoorsDay);
router.use(`/${urls.movingIndoorsWhy}`, controllers.movingIndoorsWhy);
router.use(`/${urls.movingIndoorsStairs}`, controllers.movingIndoorsStairs);
router.use(`/${urls.fallingOrStumbling}`, controllers.fallingOrStumbling);
router.use(`/${urls.fallingOrStumblingWhy}`, controllers.fallingOrStumblingWhy);
router.use(`/${urls.stumbling}`, controllers.stumbling);
router.use(`/${urls.fallingWhen}`, controllers.fallingWhen);
router.use(`/${urls.falling}`, controllers.falling);
router.use(`/${urls.fallingHelp}`, controllers.fallingHelp);
router.use(`/${urls.toiletDay}`, controllers.toiletDay);
router.use(`/${urls.toiletDayWhy}`, controllers.toiletDayWhy);
router.use(`/${urls.toiletDayFrequency}`, controllers.toiletDayFrequency);
router.use(`/${urls.eatDrinkDay}`, controllers.eatDrinkDay);
router.use(`/${urls.eatDrinkDayWhy}`, controllers.eatDrinkDayWhy);
router.use(`/${urls.eatDrinkDayFrequency}`, controllers.eatDrinkDayFrequency);
router.use(`/${urls.medicationTreatmentDay}`, controllers.medicationTreatmentDay);
router.use(`/${urls.medicationTreatmentDayWhy}`, controllers.medicationTreatmentDayWhy);
router.use(`/${urls.medicationTreatmentDayFrequency}`, controllers.medicationTreatmentDayFrequency);
router.use(`/${urls.socialActivitiesDay}`, controllers.socialActivitiesDay);
router.use(`/${urls.socialActivitiesDayFrequency}`, controllers.socialActivitiesDayFrequency);
router.use(`/${urls.communicationDay}`, controllers.communicationDay);
router.use(`/${urls.communicationDayDifficulties}`, controllers.communicationDayDifficulties);
router.use(`/${urls.keepEyeIntroduction}`, controllers.keepEyeIntroduction);
router.use(`/${urls.keepEyeChoice}`, controllers.keepEyeChoice);
router.use(`/${urls.keepEyeWhy}`, controllers.keepEyeWhy);
router.use(`/${urls.keepEyeDuration}`, controllers.keepEyeDuration);
router.use(`/${urls.safeDayNight}`, controllers.safeDayNight);
router.use(`/${urls.safeDayWhy}`, controllers.safeDayWhy);
router.use(`/${urls.safeDayLength}`, controllers.safeDayLength);
router.use(`/${urls.careNeedsCause}`, controllers.careNeedsCause);

// night time care needs
router.use(`/${urls.nightDifficulties}`, controllers.nightDifficulties);
router.use(`/${urls.turningOverNightFrequency}`, controllers.turningOverNightFrequency);
router.use(`/${urls.bedPositionNight}`, controllers.bedPositionNight);
router.use(`/${urls.bedPositionNightFrequency}`, controllers.bedPositionNightFrequency);
router.use(`/${urls.toiletNight}`, controllers.toiletNight);
router.use(`/${urls.toiletNightWhy}`, controllers.toiletNightWhy);
router.use(`/${urls.toiletNightFrequency}`, controllers.toiletNightFrequency);
router.use(`/${urls.cleaningSoiledNight}`, controllers.cleaningSoiledNight);
router.use(`/${urls.cleaningSoiledNightFrequency}`, controllers.cleaningSoiledNightFrequency);
router.use(`/${urls.medicationTreatmentNight}`, controllers.medicationTreatmentNight);
router.use(`/${urls.medicationTreatmentNightWhy}`, controllers.medicationTreatmentNightWhy);
router.use(`/${urls.medicationTreatmentNightFrequency}`, controllers.medicationTreatmentNightFrequency);
router.use(`/${urls.watchOverYouIntro}`, controllers.watchOverYouIntro);
router.use(`/${urls.watchOverNight}`, controllers.watchOverNight);
router.use(`/${urls.watchOverNightWhy}`, controllers.watchOverNightWhy);
router.use(`/${urls.watchOverNightFrequency}`, controllers.watchOverNightFrequency);
router.use(`/${urls.safeNightFrequency}`, controllers.safeNightFrequency);
router.use(`/${urls.safeNightLength}`, controllers.safeNightLength);

// aids and adaptations
router.use(`/${urls.aidsAdaptationsQuestion}`, controllers.aidsAdaptationQuestion);
router.use(`/${urls.aidsAdaptationsReason}`, controllers.aidsAdaptationReason);
router.use(`/${urls.aidsAdaptations}`, controllers.aidsAdaptations);
router.use(`/${urls.aidsAdaptationsDifficulty}`, controllers.aidsAdaptationsDifficulty);
router.use(`/${urls.aidsAdaptationsAdded}`, controllers.aidsAdaptationsAdded);
router.use(`/${urls.aidsAdaptationsRemove}`, (req, res) => {
  req.session.data['aids-adaptations-2'] = undefined;
  req.session.data['aids-adaptations-difficulty-2'] = undefined;
  req.session.data['aids-adaptations-rows-2'] = req.session.data['aids-adaptations-rows-2'].filter((e) => e?.[0]?.text.toLowerCase().replace(/[^a-z0-9]/gi, '') !== req?.query?.remove);
  if (req.session.data['aids-adaptations-rows-2'].length > 0) {
    return res.redirect(`${urls.aidsAdaptationsAdded}`);
  }
  return res.redirect(`${urls.aidsAdaptations}`);
});

// contact details
router.use(`/${urls.telephoneNumber}`, controllers.telephoneNumber);
router.use(`/${urls.telephoneNumberOther}`, controllers.telephoneNumberOther);
router.use(`/${urls.addContactDetails}`, controllers.addContactDetails);
router.use(`/${urls.preferenceContact}`, controllers.preferenceContact);
router.use(`/${urls.welshLanguageSpeak}`, controllers.welshLanguageSpeak);
router.use(`/${urls.welshLanguageWrite}`, controllers.welshLanguageWrite);
router.use(`/${urls.alternativeFormats}`, controllers.alternativeFormats);
router.use(`/${urls.emailSubmit}`, controllers.emailSubmit);
router.use(`/${urls.emailConfirm}`, controllers.emailConfirm);

// claim submission
router.use(`/${urls.declaration}`, controllers.declaration);
router.use(`/${urls.applicationComplete}`, controllers.applicationComplete);

// check your answers
router.use(`/${urls.checkAnswersDetails}`, controllers.checkAnswersDetails);
router.use(`/${urls.checkAnswersDay}`, controllers.checkAnswersDay);
router.use(`/${urls.checkAnswersNight}`, controllers.checkAnswersNight);
router.use(`/${urls.checkAnswersStartDate}`, controllers.checkAnswersStartDate);
router.use(`/${urls.checkAnswersContactDetails}`, controllers.checkAnswersContactDetails);
router.use(`/${urls.checkAnswersFullList}`, controllers.checkAnswersFullList);
router.use(`/${urls.checkAnswersSpecialRules}`, controllers.checkAnswersSpecialRules);

// accessiblity
router.use(`/${urls.accessibilityStatement}`, controllers.accessibilityStatement);

module.exports = router;
