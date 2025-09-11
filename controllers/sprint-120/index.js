// start
const verificationCode = require('./start/verification-code');
const start = require('./start/start');
const beforeYouStart = require('./start/before-you-start');
const beforeYouStartIneligible = require('./start/before-you-start-ineligible');
const helpingSomeoneIntro = require('./start/helping-someone-intro');

// govuk
const overview = require('./govuk/overview');
const whatYoullGet = require('./govuk/what-youll-get');
const eligibility = require('./govuk/eligibility');
const howToClaim = require('./govuk/how-to-claim');
const reportChangeInCircumstances = require('./govuk/report-change-in-circumstances');

// scaling
const limitReached = require('./scaling/limit-reached');

// visiting service
const effectiveDate = require('./visiting-service/effective-date');

// claim type
const claimType = require('./claim-type/claim-type');
const claimTypeChangeInCircumstances = require('./claim-type/claim-type-change-in-circumstances');
const claimTypeRenewal = require('./claim-type/claim-type-renewal');

// eligibility
const birthDate = require('./eligibility/birth-date');
const birthDateIneligible = require('./eligibility/birth-date-ineligible');
const otherBenefits = require('./eligibility/other-benefits');
const otherBenefitsIneligible = require('./eligibility/other-benefits-ineligible');
const pipIneligible = require('./eligibility/pip-ineligible');
const dlaIneligible = require('./eligibility/dla-ineligible');
const adpIneligible = require('./eligibility/adp-ineligible');
const attendanceAllowanceIneligible = require('./eligibility/attendance-allowance-ineligible');
const nationality = require('./eligibility/nationality');
const nationalityOther = require('./eligibility/nationality-other');
const livingInUk = require('./eligibility/living-in-uk');
const residenceCountry = require('./eligibility/residence-country');
const previousResidenceScotland = require('./eligibility/previous-residence-scotland');
const previousClaimPadp = require('./eligibility/previous-claim-padp');
const countryOutsideUkDuration = require('./eligibility/country-outside-uk-duration');
const countryOutsideUkBenefits = require('./eligibility/country-outside-uk-benefits');
const countryOutsideUkWorking = require('./eligibility/country-outside-uk-working');
const whoIsApplying = require('./eligibility/who-is-applying');
const applyingSomeoneElse = require('./eligibility/applying-someone-else');
const whoIsApplyingIneligible = require('./eligibility/who-is-applying-ineligible');
const personClaimingIneligible = require('./eligibility/person-claiming-ineligible');
const organisationClaimingIneligible = require('./eligibility/organisation-claiming-ineligible');
const bestDescribe = require('./eligibility/best-describe');
const becomingAnAppointee = require('./eligibility/becoming-an-appointee');
const manageOwnAffairs = require('./eligibility/manage-own-affairs');
const manageOwnAffairsIneligible = require('./eligibility/manage-own-affairs-ineligible');
const manageOwnAffairsSomeoneElse = require('./eligibility/manage-own-affairs-someone-else');
const manageOwnAffairsAuthority = require('./eligibility/manage-own-affairs-authority');
const helperName = require('./eligibility/helper-name');

// official capacity
const representativeIntro = require('./official-capacity/representative-intro');
const representativeContactInformation = require('./official-capacity/representative-contact-information');
const representativeName = require('./official-capacity/representative-name');
const representativeNationalInsurance = require('./official-capacity/representative-national-insurance');
const representativeBirthDate = require('./official-capacity/representative-birth-date');
const representativeAddress = require('./official-capacity/representative-address');
const representativeAddressPostcode = require('./official-capacity/representative-address-postcode');
const representativeAddressSelect = require('./official-capacity/representative-address-select');
const representativeAddressManual = require('./official-capacity/representative-address-manual');
const representativeAddressInternational = require('./official-capacity/representative-address-international');
const representativeTelephoneNumber = require('./official-capacity/representative-telephone-number');

// identity
const nationalInsurance = require('./identity/national-insurance');
const fullName = require('./identity/full-name');
const homeAddressPostCode = require('./identity/home-address-postcode');
const homeAddressSelect = require('./identity/home-address-select');
const homeAddressManual = require('./identity/home-address-manual');
const homeAddressInternational = require('./identity/home-address-international');
const homeAddressPostcodeScotland = require('./identity/home-address-postcode-scotland');

// payability
const careHomeHospital = require('./payability/care-home-hospital');
const hospitalAddress = require('./payability/hospital-address');
const careHomeAddress = require('./payability/care-home-address');
const hospiceAddress = require('./payability/hospice-address');
const similarPlaceAddress = require('./payability/similar-place-address');
const careHomeFunding = require('./payability/care-home-funding');
const careHomeFundingWho = require('./payability/care-home-funding-who');
const careHomeFundingTrusts = require('./payability/care-home-funding-trusts');
const careHomeHospitalAdmissionDate = require('./payability/care-home-hospital-admission-date');
const hospitalAdmissionDate = require('./payability/hospital-admission-date');
const careHomeAdmissionDate = require('./payability/care-home-admission-date');
const hospiceAdmissionDate = require('./payability/hospice-admission-date');
const hospitalFunding = require('./payability/hospital-funding');
const careHomeHospitalOvernight = require('./payability/care-home-hospital-overnight');
const careHomeHospitalOvernightInformation = require('./payability/care-home-hospital-overnight-information');
const accommodationAddressOutsideUK = require('./payability/accommodation-address-outside-uk');
const sercoCareHomeHospital = require('./payability/serco-care-home-hospital');

// special rules
const specialRulesDeclaration = require('./special-rules/special-rules-declaration');
const specialRulesFormCompleted = require('./special-rules/special-rules-form-completed');
const specialRulesFormSent = require('./special-rules/special-rules-form-sent');
const specialRulesFormUploadOption = require('./special-rules/special-rules-form-upload-option');
const specialRulesFormType = require('./special-rules/special-rules-form-type');
const specialRulesFormGuidance = require('./special-rules/special-rules-form-guidance');
const specialRulesFormUpload = require('./special-rules/special-rules-form-upload');
const specialRulesFormAdded = require('./special-rules/special-rules-form-added');

// illness and disabilities
const illnessDisability = require('./illness-and-disabilities/illness-disability');
const illnessDisabilityDate = require('./illness-and-disabilities/illness-disability-date');
const illnessDisabilityDateManual = require('./illness-and-disabilities/illness-disability-date-manual');
const illnessDisabilityAdded = require('./illness-and-disabilities/illness-disability-added');
const illnessDisabilityManual = require('./illness-and-disabilities/illness-disability-manual');

// health conditions
const healthConditions = require('./health-conditions/health-conditions');
const healthConditionsManual = require('./health-conditions/health-conditions-manual');
const healthConditionsAdded = require('./health-conditions/health-conditions-added');

// renal dyalisis
const renalDialysis = require('./renal-dyalisis/renal-dialysis');
const renalDialysisWhere = require('./renal-dyalisis/renal-dialysis-where');
const renalDialysisWhen = require('./renal-dyalisis/renal-dialysis-when');
const renalDialysisFrequency = require('./renal-dyalisis/renal-dialysis-frequency');
const renalDialysisHelp = require('./renal-dyalisis/renal-dialysis-help');

// surgery or treatment
const treatmentSurgery = require('./surgery-or-treatment/treatment-surgery');
const treatmentSurgeryInformation = require('./surgery-or-treatment/treatment-surgery-information');

// supporting documents
const supportingDocumentsIntro = require('./evidence/supporting-documents-intro');
const supportingDocumentsOptions = require('./evidence/supporting-documents-options');
const supportingDocumentsGuidance = require('./evidence/supporting-documents-guidance');
const supportingDocumentsUpload = require('./evidence/supporting-documents-upload');
const supportingDocumentsAdded = require('./evidence/supporting-documents-added');
const supportingDocumentsEmailLink = require('./evidence/supporting-documents-email-link');
const supportingDocumentsEmailAddress = require('./evidence/supporting-documents-email-address');
const supportingDocumentsUploadLater = require('./evidence/supporting-documents-upload-later');
const supportingDocumentsPost = require('./evidence/supporting-documents-post');
const supportingDocumentsNone = require('./evidence/supporting-documents-none');

// consent
const consent = require('./consent/consent');
const gpDetails = require('./consent/gp-details');
const healthcareProfessionalAdd = require('./consent/healthcare-professional-add');
const healthcareProfessionalOptions = require('./consent/healthcare-professional-options');
const healthcareProfessionalDetails = require('./consent/healthcare-professional-details');
const surgeryMedicalCentre = require('./consent/surgery-medical-centre');
const surgeryMedicalCentreOutsideUk = require('./consent/surgery-medical-centre-outside-uk');
const evidence = require('./consent/evidence');

// care needs daytime
const dayDifficulties = require('./care-needs-day/day-difficulties');
const difficultiesStartDate = require('./care-needs-day/difficulties-start-date');
const bedDay = require('./care-needs-day/bed-day');
const bedDayWhy = require('./care-needs-day/bed-day-why');
const returnBedDay = require('./care-needs-day/return-bed-day');
const washDay = require('./care-needs-day/wash-day');
const washDayWhy = require('./care-needs-day/wash-day-why');
const additionalWashDay = require('./care-needs-day/additional-wash-day');
const dressDay = require('./care-needs-day/dress-day');
const dressDayWhy = require('./care-needs-day/dress-day-why');
const additionalDressDay = require('./care-needs-day/additional-dress-day');
const movingIndoorsDay = require('./care-needs-day/moving-indoors-day');
const movingIndoorsWhy = require('./care-needs-day/moving-indoors-why');
const movingIndoorsStairs = require('./care-needs-day/moving-indoors-stairs');
const fallingOrStumbling = require('./care-needs-day/falling-or-stumbling');
const fallingOrStumblingWhy = require('./care-needs-day/falling-or-stumbling-why');
const stumbling = require('./care-needs-day/stumbling');
const fallingWhen = require('./care-needs-day/falling-when');
const falling = require('./care-needs-day/falling');
const fallingHelp = require('./care-needs-day/falling-help');
const toiletDay = require('./care-needs-day/toilet-day');
const toiletDayWhy = require('./care-needs-day/toilet-day-why');
const toiletDayFrequency = require('./care-needs-day/toilet-day-frequency');
const eatDrinkDay = require('./care-needs-day/eat-drink-day');
const eatDrinkDayWhy = require('./care-needs-day/eat-drink-day-why');
const eatDrinkDayFrequency = require('./care-needs-day/eat-drink-day-frequency');
const medicationTreatmentDay = require('./care-needs-day/medication-treatment-day');
const medicationTreatmentDayWhy = require('./care-needs-day/medication-treatment-day-why');
const medicationTreatmentDayFrequency = require('./care-needs-day/medication-treatment-day-frequency');
const socialActivitiesDay = require('./care-needs-day/social-activities-day');
const socialActivitiesDayFrequency = require('./care-needs-day/social-activities-day-frequency');
const communicationDay = require('./care-needs-day/communication-day');
const communicationDayDifficulties = require('./care-needs-day/communication-day-difficulties');
const keepEyeIntroduction = require('./care-needs-day/keep-eye-introduction');
const keepEyeChoice = require('./care-needs-day/keep-eye-choice');
const keepEyeWhy = require('./care-needs-day/keep-eye-why');
const keepEyeDuration = require('./care-needs-day/keep-eye-duration');
const safeDayNight = require('./care-needs-day/safe-day-night');
const safeDayWhy = require('./care-needs-day/safe-day-why');
const safeDayLength = require('./care-needs-day/safe-day-length');
const careNeedsCause = require('./care-needs-day/care-needs-cause');

// night time care needs
const nightDifficulties = require('./care-needs-night/night-difficulties');
const turningOverNightFrequency = require('./care-needs-night/turning-over-night-frequency');
const bedPositionNight = require('./care-needs-night/bed-position-night');
const bedPositionNightFrequency = require('./care-needs-night/bed-position-night-frequency');
const toiletNight = require('./care-needs-night/toilet-night');
const toiletNightWhy = require('./care-needs-night/toilet-night-why');
const toiletNightFrequency = require('./care-needs-night/toilet-night-frequency');
const cleaningSoiledNight = require('./care-needs-night/cleaning-soiled-night');
const cleaningSoiledNightFrequency = require('./care-needs-night/cleaning-soiled-night-frequency');
const medicationTreatmentNight = require('./care-needs-night/medication-treatment-night');
const medicationTreatmentNightWhy = require('./care-needs-night/medication-treatment-night-why');
const medicationTreatmentNightFrequency = require('./care-needs-night/medication-treatment-night-frequency');
const watchOverYouIntro = require('./care-needs-night/watch-over-you-intro');
const watchOverNight = require('./care-needs-night/watch-over-night');
const watchOverNightWhy = require('./care-needs-night/watch-over-night-why');
const watchOverNightFrequency = require('./care-needs-night/watch-over-night-frequency');
const safeNightFrequency = require('./care-needs-night/safe-night-frequency');
const safeNightLength = require('./care-needs-night/safe-night-length');

// aids and adaptations
const aidsAdaptationQuestion = require('./aids-and-adaptations/aids-adaptations-question');
const aidsAdaptationReason = require('./aids-and-adaptations/aids-adaptations-reason');
const aidsAdaptations = require('./aids-and-adaptations/aids-adaptations');
const aidsAdaptationsDifficulty = require('./aids-and-adaptations/aids-adaptations-difficulty');
const aidsAdaptationsAdded = require('./aids-and-adaptations/aids-adaptations-added');

// contact details
const telephoneNumber = require('./contact-details/telephone-number');
const telephoneNumberOther = require('./contact-details/telephone-number-other');
const addContactDetails = require('./contact-details/add-contact-details');
const preferenceContact = require('./contact-details/preference-contact');
const welshLanguageSpeak = require('./contact-details/welsh-language-speak');
const welshLanguageWrite = require('./contact-details/welsh-language-write');
const alternativeFormats = require('./contact-details/alternative-formats');
const emailSubmit = require('./contact-details/email-submit');
const emailConfirm = require('./contact-details/email-confirm');

// claim submission
const declaration = require('./claim-submission/declaration');
const applicationComplete = require('./claim-submission/application-complete');

// check your answers
const checkAnswersDetails = require('./check-your-answers/check-answers-details');
const checkAnswersDay = require('./check-your-answers/check-answers-day');
const checkAnswersNight = require('./check-your-answers/check-answers-night');
const checkAnswersStartDate = require('./check-your-answers/check-answers-start-date');
const checkAnswersContactDetails = require('./check-your-answers/check-answers-contact-details');
const checkAnswersFullList = require('./check-your-answers/check-answers-full-list');
const checkAnswersSpecialRules = require('./check-your-answers/check-answers-special-rules');

// accessiblity
const accessibilityStatement = require('./accessibility/accessibility-statement');

module.exports = {
  verificationCode,
  start,
  beforeYouStart,
  beforeYouStartIneligible,
  helpingSomeoneIntro,
  overview,
  whatYoullGet,
  eligibility,
  howToClaim,
  reportChangeInCircumstances,
  limitReached,
  claimType,
  claimTypeChangeInCircumstances,
  claimTypeRenewal,
  effectiveDate,
  whoIsApplying,
  applyingSomeoneElse,
  whoIsApplyingIneligible,
  personClaimingIneligible,
  organisationClaimingIneligible,
  bestDescribe,
  becomingAnAppointee,
  manageOwnAffairs,
  manageOwnAffairsIneligible,
  manageOwnAffairsAuthority,
  manageOwnAffairsSomeoneElse,
  helperName,
  representativeIntro,
  representativeContactInformation,
  representativeName,
  representativeNationalInsurance,
  representativeBirthDate,
  representativeAddress,
  representativeAddressPostcode,
  representativeAddressSelect,
  representativeAddressManual,
  representativeAddressInternational,
  representativeTelephoneNumber,
  birthDate,
  birthDateIneligible,
  otherBenefits,
  otherBenefitsIneligible,
  pipIneligible,
  dlaIneligible,
  adpIneligible,
  attendanceAllowanceIneligible,
  residenceCountry,
  previousResidenceScotland,
  previousClaimPadp,
  countryOutsideUkDuration,
  countryOutsideUkBenefits,
  countryOutsideUkWorking,
  livingInUk,
  nationalInsurance,
  fullName,
  homeAddressPostCode,
  homeAddressManual,
  homeAddressInternational,
  homeAddressPostcodeScotland,
  treatmentSurgery,
  careHomeHospital,
  hospitalAddress,
  careHomeAddress,
  hospiceAddress,
  similarPlaceAddress,
  careHomeFunding,
  careHomeFundingWho,
  careHomeFundingTrusts,
  careHomeHospitalAdmissionDate,
  hospitalAdmissionDate,
  careHomeAdmissionDate,
  hospiceAdmissionDate,
  hospitalFunding,
  careHomeHospitalOvernight,
  careHomeHospitalOvernightInformation,
  accommodationAddressOutsideUK,
  sercoCareHomeHospital,
  specialRulesDeclaration,
  specialRulesFormCompleted,
  specialRulesFormSent,
  specialRulesFormUploadOption,
  specialRulesFormType,
  specialRulesFormGuidance,
  specialRulesFormUpload,
  specialRulesFormAdded,
  healthConditions,
  healthConditionsManual,
  healthConditionsAdded,
  illnessDisability,
  illnessDisabilityDate,
  illnessDisabilityDateManual,
  illnessDisabilityAdded,
  illnessDisabilityManual,
  supportingDocumentsIntro,
  supportingDocumentsOptions,
  supportingDocumentsGuidance,
  supportingDocumentsUpload,
  supportingDocumentsAdded,
  supportingDocumentsEmailLink,
  supportingDocumentsEmailAddress,
  supportingDocumentsUploadLater,
  supportingDocumentsPost,
  supportingDocumentsNone,
  consent,
  gpDetails,
  healthcareProfessionalAdd,
  healthcareProfessionalOptions,
  healthcareProfessionalDetails,
  surgeryMedicalCentre,
  surgeryMedicalCentreOutsideUk,
  evidence,
  telephoneNumber,
  telephoneNumberOther,
  addContactDetails,
  preferenceContact,
  dayDifficulties,
  nightDifficulties,
  emailSubmit,
  emailConfirm,
  welshLanguageSpeak,
  welshLanguageWrite,
  alternativeFormats,
  homeAddressSelect,
  checkAnswersFullList,
  checkAnswersDetails,
  checkAnswersStartDate,
  checkAnswersContactDetails,
  checkAnswersSpecialRules,
  checkAnswersNight,
  nationality,
  nationalityOther,
  renalDialysis,
  renalDialysisWhere,
  renalDialysisWhen,
  renalDialysisFrequency,
  renalDialysisHelp,
  treatmentSurgeryInformation,
  bedDay,
  bedDayWhy,
  additionalWashDay,
  additionalDressDay,
  returnBedDay,
  washDay,
  washDayWhy,
  dressDay,
  dressDayWhy,
  turningOverNightFrequency,
  bedPositionNight,
  bedPositionNightFrequency,
  toiletNight,
  toiletNightWhy,
  toiletNightFrequency,
  cleaningSoiledNight,
  cleaningSoiledNightFrequency,
  medicationTreatmentNight,
  medicationTreatmentNightWhy,
  medicationTreatmentNightFrequency,
  difficultiesStartDate,
  movingIndoorsDay,
  movingIndoorsWhy,
  movingIndoorsStairs,
  fallingOrStumbling,
  fallingOrStumblingWhy,
  fallingWhen,
  stumbling,
  falling,
  fallingHelp,
  toiletDay,
  toiletDayWhy,
  toiletDayFrequency,
  eatDrinkDay,
  eatDrinkDayWhy,
  eatDrinkDayFrequency,
  medicationTreatmentDay,
  medicationTreatmentDayWhy,
  medicationTreatmentDayFrequency,
  socialActivitiesDay,
  socialActivitiesDayFrequency,
  communicationDay,
  communicationDayDifficulties,
  checkAnswersDay,
  watchOverYouIntro,
  watchOverNight,
  watchOverNightWhy,
  watchOverNightFrequency,
  safeDayNight,
  safeDayWhy,
  safeDayLength,
  safeNightFrequency,
  safeNightLength,
  keepEyeIntroduction,
  keepEyeChoice,
  keepEyeWhy,
  keepEyeDuration,
  careNeedsCause,
  aidsAdaptationQuestion,
  aidsAdaptationReason,
  aidsAdaptations,
  aidsAdaptationsDifficulty,
  aidsAdaptationsAdded,
  declaration,
  applicationComplete,
  accessibilityStatement,
};
