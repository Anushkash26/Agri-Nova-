"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, useCallback } from "react"

type Language = "en" | "hi" | "mr" | "gu" | "pa" | "bn"

type Translations = {
  [key: string]: {
    [key in Language]: string
  }
}

// Expanded translations for all pages
const translations: Translations = {
  "nav.home": {
    en: "Home",
    hi: "होम",
    mr: "मुख्यपृष्ठ",
    gu: "હોમ",
    pa: "ਹੋਮ",
    bn: "হোম",
  },
  "nav.marketplace": {
    en: "Marketplace",
    hi: "बाज़ार",
    mr: "बाजारपेठ",
    gu: "બજાર",
    pa: "ਮਾਰਕੀਟ",
    bn: "বাজার",
  },
  "nav.equipment": {
    en: "Equipment Rental",
    hi: "उपकरण किराया",
    mr: "उपकरण भाडे",
    gu: "ઉપકરણ ભાડે",
    pa: "ਉਪਕਰਣ ਕਿਰਾਏ",
    bn: "সরঞ্জাম ভাড়া",
  },
  "nav.community": {
    en: "Community",
    hi: "समुदाय",
    mr: "समुदाय",
    gu: "સમુદાય",
    pa: "ਕਮਿਊਨਿਟੀ",
    bn: "সম্প্রদায়",
  },
  "nav.resources": {
    en: "Resources",
    hi: "संसाधन",
    mr: "संसाधने",
    gu: "સંસાધનો",
    pa: "ਸਰੋਤ",
    bn: "সম্পদ",
  },
  "hero.title": {
    en: "Connecting Farmers Directly to Markets",
    hi: "किसानों को सीधे बाजारों से जोड़ना",
    mr: "शेतकऱ्यांना थेट बाजारपेठेशी जोडणे",
    gu: "ખેડૂતોને સીધા બજારો સાથે જોડવા",
    pa: "ਕਿਸਾਨਾਂ ਨੂੰ ਸਿੱਧੇ ਮੰਡੀਆਂ ਨਾਲ ਜੋੜਨਾ",
    bn: "কৃষকদের সরাসরি বাজারের সাথে সংযোগ করা",
  },
  "hero.subtitle": {
    en: "Eliminate middlemen, get fair prices, and access modern farming resources",
    hi: "बिचौलियों को खत्म करें, उचित मूल्य प्राप्त करें, और आधुनिक कृषि संसाधनों तक पहुंच प्राप्त करें",
    mr: "मध्यस्थ दूर करा, योग्य किंमत मिळवा आणि आधुनिक शेती संसाधनांमध्ये प्रवेश करा",
    gu: "વચેટિયાઓને દૂર કરો, વાજબી ભાવ મેળવો અને આધુનિક ખેતી સંસાધનો સુધી પહોંચ મેળવો",
    pa: "ਵਿਚੋਲਿਆਂ ਨੂੰ ਖਤਮ ਕਰੋ, ਵਾਜਬ ਕੀਮਤਾਂ ਪ੍ਰਾਪਤ ਕਰੋ, ਅਤੇ ਆਧੁਨਿਕ ਖੇਤੀਬਾੜੀ ਸਰੋਤਾਂ ਤੱਕ ਪਹੁੰਚ ਪ੍ਰਾਪਤ ਕਰੋ",
    bn: "মধ্যস্থতাকারীদের দূর করুন, ন্যায্য মূল্য পান এবং আধুনিক কৃষি সম্পদে অ্যাক্সেস করুন",
  },
  "features.marketplace": {
    en: "Digital Marketplace",
    hi: "डिजिटल बाज़ार",
    mr: "डिजिटल बाजारपेठ",
    gu: "ડિજિટલ બજાર",
    pa: "ਡਿਜੀਟਲ ਮਾਰਕੀਟ",
    bn: "ডিজিটাল বাজার",
  },
  "features.equipment": {
    en: "Equipment Rental",
    hi: "उपकरण किराया",
    mr: "उपकरण भाडे",
    gu: "ઉપકરણ ભાડે",
    pa: "ਉਪਕਰਣ ਕਿਰਾਏ",
    bn: "সরঞ্জাম ভাড়া",
  },
  "features.community": {
    en: "Farmer Community",
    hi: "किसान समुदाय",
    mr: "शेतकरी समुदाय",
    gu: "ખેડૂત સમુદાય",
    pa: "ਕਿਸਾਨ ਕਮਿਊਨਿਟੀ",
    bn: "কৃষক সম্প্রদায়",
  },
  "features.ai": {
    en: "AI Price Suggestions",
    hi: "एआई मूल्य सुझाव",
    mr: "एआय किंमत सूचना",
    gu: "AI ભાવ સૂચનો",
    pa: "AI ਕੀਮਤ ਸੁਝਾਅ",
    bn: "AI মূল্য পরামর্শ",
  },
  "cta.join": {
    en: "Join Agri-nova Today",
    hi: "आज ही एग्री-नोवा से जुड़ें",
    mr: "आज अॅग्री-नोवा मध्ये सामील व्हा",
    gu: "આજે જ એગ્રી-નોવામાં જોડાઓ",
    pa: "ਅੱਜ ਹੀ ਐਗਰੀ-ਨੋਵਾ ਨਾਲ ਜੁੜੋ",
    bn: "আজই অ্যাগ্রি-নোভায় যোগ দিন",
  },
  "cta.getStarted": {
    en: "Get Started",
    hi: "शुरू करें",
    mr: "सुरु करा",
    gu: "શરૂ કરો",
    pa: "ਸ਼ੁਰੂ ਕਰੋ",
    bn: "শুরু করুন",
  },
  "cta.learnMore": {
    en: "Learn More",
    hi: "और जानें",
    mr: "अधिक जाणून घ्या",
    gu: "વધુ જાણો",
    pa: "ਹੋਰ ਜਾਣੋ",
    bn: "আরও জানুন",
  },
  "features.title": {
    en: "Our Features",
    hi: "हमारी विशेषताएं",
    mr: "आमची वैशिष्ट्ये",
    gu: "અમારી વિશેષતાઓ",
    pa: "ਸਾਡੀਆਂ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ",
    bn: "আমাদের বৈশিষ্ট্য",
  },
  "features.marketplace.desc": {
    en: "Sell your crops directly to buyers without middlemen and get fair prices.",
    hi: "बिचौलियों के बिना अपनी फसलों को सीधे खरीदारों को बेचें और उचित मूल्य प्राप्त करें।",
    mr: "मध्यस्थांशिवाय आपली पिके थेट खरेदीदारांना विकून योग्य किंमत मिळवा.",
    gu: "વચેટિયાઓ વિના તમારા પાકને સીધા ખરીદનારાઓને વેચો અને વાજબી ભાવ મેળવો.",
    pa: "ਵਿਚੋਲਿਆਂ ਤੋਂ ਬਿਨਾਂ ਆਪਣੀਆਂ ਫਸਲਾਂ ਨੂੰ ਸਿੱਧੇ ਖਰੀਦਦਾਰਾਂ ਨੂੰ ਵੇਚੋ ਅਤੇ ਵਾਜਬ ਕੀਮਤਾਂ ਪ੍ਰਾਪਤ ਕਰੋ।",
    bn: "মধ্যস্থতাকারী ছাড়াই আপনার ফসল সরাসরি ক্রেতাদের কাছে বিক্রি করুন এবং ন্যায্য মূল্য পান।",
  },
  "features.equipment.desc": {
    en: "Rent farming equipment or list your own equipment for others to rent.",
    hi: "कृषि उपकरण किराए पर लें या अपने उपकरण को दूसरों के लिए सूचीबद्ध करें।",
    mr: "शेती उपकरणे भाड्याने घ्या किंवा इतरांना भाड्याने देण्यासाठी आपली स्वतःची उपकरणे सूचीबद्ध करा.",
    gu: "ખેતીના સાધનો ભાડે લો અથવા અન્ય લોકો ભાડે લઈ શકે તે માટે તમારા પોતાના સાધનો સૂચિબદ્ધ કરો.",
    pa: "ਖੇਤੀਬਾੜੀ ਦੇ ਉਪਕਰਣ ਕਿਰਾਏ 'ਤੇ ਲਓ ਜਾਂ ਦੂਜਿਆਂ ਨੂੰ ਕਿਰਾਏ 'ਤੇ ਦੇਣ ਲਈ ਆਪਣੇ ਉਪਕਰਣ ਸੂਚੀਬੱਧ ਕਰੋ।",
    bn: "কৃষি যন্ত্রপাতি ভাড়া নিন বা অন্যদের ভাড়া দেওয়ার জন্য আপনার নিজের যন্ত্রপাতি তালিকাভুক্ত করুন।",
  },
  "features.community.desc": {
    en: "Connect with other farmers, share knowledge, and learn best practices.",
    hi: "अन्य किसानों से जुड़ें, ज्ञान साझा करें, और सर्वोत्तम प्रथाओं को सीखें।",
    mr: "इतर शेतकऱ्यांशी जोडा, ज्ञान शेअर करा आणि सर्वोत्तम पद्धती शिका.",
    gu: "અન્ય ખેડૂતો સાથે જોડાઓ, જ્ઞાન વહેંચો અને શ્રેષ્ઠ પદ્ધતિઓ શીખો.",
    pa: "ਹੋਰ ਕਿਸਾਨਾਂ ਨਾਲ ਜੁੜੋ, ਗਿਆਨ ਸਾਂਝਾ ਕਰੋ, ਅਤੇ ਸਰਵੋਤਮ ਅਭਿਆਸ ਸਿੱਖੋ।",
    bn: "অন্যান্য কৃষকদের সাথে সংযোগ করুন, জ্ঞান ভাগ করুন এবং সেরা অনুশীলন শিখুন।",
  },
  "features.ai.desc": {
    en: "Get AI-powered price suggestions for your crops based on market trends.",
    hi: "बाजार के रुझानों के आधार पर अपनी फसलों के लिए एआई-संचालित मूल्य सुझाव प्राप्त करें।",
    mr: "बाजारातील कलांच्या आधारे तुमच्या पिकांसाठी AI-संचालित किंमत सूचना मिळवा.",
    gu: "બજારના વલણો પર આધારિત તમારા પાક માટે AI-સંચાલિત ભાવ સૂચનો મેળવો.",
    pa: "ਮਾਰਕੀਟ ਦੇ ਰੁਝਾਨਾਂ ਦੇ ਆਧਾਰ 'ਤੇ ਆਪਣੀਆਂ ਫਸਲਾਂ ਲਈ AI-ਸੰਚਾਲਿਤ ਕੀਮਤ ਸੁਝਾਅ ਪ੍ਰਾਪਤ ਕਰੋ।",
    bn: "বাজারের প্রবণতার উপর ভিত্তি করে আপনার ফসলের জন্য AI-চালিত মূল্য পরামর্শ পান।",
  },
  "howItWorks.title": {
    en: "How It Works",
    hi: "यह कैसे काम करता है",
    mr: "हे कसे कार्य करते",
    gu: "તે કેવી રીતે કામ કરે છે",
    pa: "ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ",
    bn: "এটি কিভাবে কাজ করে",
  },
  "howItWorks.step1.title": {
    en: "Create Your Account",
    hi: "अपना खाता बनाएं",
    mr: "आपले खाते तयार करा",
    gu: "તમારું એકાઉન્ટ બનાવો",
    pa: "ਆਪਣਾ ਖਾਤਾ ਬਣਾਓ",
    bn: "আপনার অ্যাকাউন্ট তৈরি করুন",
  },
  "howItWorks.step1.desc": {
    en: "Sign up as a farmer, buyer, or equipment owner and complete your profile.",
    hi: "किसान, खरीदार या उपकरण मालिक के रूप में साइन अप करें और अपनी प्रोफ़ाइल पूरी करें।",
    mr: "शेतकरी, खरेदीदार किंवा उपकरण मालक म्हणून साइन अप करा आणि आपले प्रोफाइल पूर्ण करा.",
    gu: "ખેડૂત, ખરીદનાર અથવા સાધન માલિક તરીકે સાઇન અપ કરો અને તમારી પ્રોફાઇલ પૂર્ણ કરો.",
    pa: "ਕਿਸਾਨ, ਖਰੀਦਦਾਰ, ਜਾਂ ਉਪਕਰਣ ਮਾਲਕ ਵਜੋਂ ਸਾਈਨ ਅੱਪ ਕਰੋ ਅਤੇ ਆਪਣੀ ਪ੍ਰੋਫਾਈਲ ਪੂਰੀ ਕਰੋ।",
    bn: "কৃষক, ক্রেতা বা যন্ত্রপাতির মালিক হিসাবে সাইন আপ করুন এবং আপনার প্রোফাইল সম্পূর্ণ করুন।",
  },
  "howItWorks.step2.title": {
    en: "List Your Products",
    hi: "अपने उत्पादों को सूचीबद्ध करें",
    mr: "आपले उत्पादन सूचीबद्ध करा",
    gu: "તમારા ઉત્પાદનો સૂચિબદ્ધ કરો",
    pa: "ਆਪਣੇ ਉਤਪਾਦਾਂ ਨੂੰ ਸੂਚੀਬੱਧ ਕਰੋ",
    bn: "আপনার পণ্য তালিকাভুক্ত করুন",
  },
  "howItWorks.step2.desc": {
    en: "List your crops or equipment with details, photos, and pricing.",
    hi: "विवरण, फोटो और मूल्य निर्धारण के साथ अपनी फसलों या उपकरणों को सूचीबद्ध करें।",
    mr: "तपशील, फोटो आणि किंमतीसह आपली पिके किंवा उपकरणे सूचीबद्ध करा.",
    gu: "વિગતો, ફોટા અને કિંમત સાથે તમારા પાક અથવા સાધનોને સૂચિબદ્ધ કરો.",
    pa: "ਵੇਰਵਿਆਂ, ਫੋਟੋਆਂ ਅਤੇ ਕੀਮਤਾਂ ਦੇ ਨਾਲ ਆਪਣੀਆਂ ਫਸਲਾਂ ਜਾਂ ਉਪਕਰਣਾਂ ਨੂੰ ਸੂਚੀਬੱਧ ਕਰੋ।",
    bn: "বিবরণ, ছবি এবং মূল্য সহ আপনার ফসল বা যন্ত্রপাতি তালিকাভুক্ত করুন।",
  },
  "howItWorks.step3.title": {
    en: "Connect & Transact",
    hi: "जुड़ें और लेनदेन करें",
    mr: "कनेक्ट करा आणि व्यवहार करा",
    gu: "જોડાઓ અને વ્યવહાર કરો",
    pa: "ਜੁੜੋ ਅਤੇ ਲੈਣ-ਦੇਣ ਕਰੋ",
    bn: "সংযোগ করুন এবং লেনদেন করুন",
  },
  "howItWorks.step3.desc": {
    en: "Connect with buyers or sellers, negotiate, and complete secure transactions.",
    hi: "खरीदारों या विक्रेताओं से जुड़ें, बातचीत करें, और सुरक्षित लेनदेन पूरा करें।",
    mr: "खरेदीदार किंवा विक्रेत्यांशी जोडा, वाटाघाटी करा आणि सुरक्षित व्यवहार पूर्ण करा.",
    gu: "ખરીદનારાઓ અથવા વેચનારાઓ સાથે જોડાઓ, વાટાઘાટ કરો અને સુરક્ષિત વ્યવહારો પૂર્ણ કરો.",
    pa: "ਖਰੀਦਦਾਰਾਂ ਜਾਂ ਵਿਕਰੇਤਾਵਾਂ ਨਾਲ ਜੁੜੋ, ਗੱਲਬਾਤ ਕਰੋ, ਅਤੇ ਸੁਰੱਖਿਅਤ ਲੈਣ-ਦੇਣ ਪੂਰਾ ਕਰੋ।",
    bn: "ক্রেতা বা বিক্রেতাদের সাথে সংযোগ করুন, আলোচনা করুন এবং নিরাপদ লেনদেন সম্পূর্ণ করুন।",
  },
  "marketplace.title": {
    en: "Agricultural Marketplace",
    hi: "कृषि बाज़ार",
    mr: "कृषी बाजारपेठ",
    gu: "કૃષિ બજાર",
    pa: "ਖੇਤੀਬਾੜੀ ਮਾਰਕੀਟ",
    bn: "কৃষি বাজার",
  },
  "marketplace.subtitle": {
    en: "Buy and sell agricultural products directly without middlemen. Get fair prices and quality products.",
    hi: "बिचौलियों के बिना सीधे कृषि उत्पादों को खरीदें और बेचें। उचित मूल्य और गुणवत्तापूर्ण उत्पाद प्राप्त करें।",
    mr: "मध्यस्थांशिवाय थेट कृषी उत्पादने खरेदी आणि विक्री करा. योग्य किंमती आणि दर्जेदार उत्पादने मिळवा.",
    gu: "વચેટિયાઓ વિના સીધા કૃષિ ઉત્પાદનો ખરીદો અને વેચો. વાજબી ભાવ અને ગુણવત્તાયુક્ત ઉત્પાદનો મેળવો.",
    pa: "ਵਿਚੋਲਿਆਂ ਤੋਂ ਬਿਨਾਂ ਸਿੱਧੇ ਖੇਤੀਬਾੜੀ ਉਤਪਾਦਾਂ ਨੂੰ ਖਰੀਦੋ ਅਤੇ ਵੇਚੋ। ਵਾਜਬ ਕੀਮਤਾਂ ਅਤੇ ਗੁਣਵੱਤਾ ਵਾਲੇ ਉਤਪਾਦ ਪ੍ਰਾਪਤ ਕਰੋ।",
    bn: "মধ্যস্থতাকারী ছাড়াই সরাসরি কৃষি পণ্য কেনাবেচা করুন। ন্যায্য মূল্য এবং মানসম্পন্ন পণ্য পান।",
  },
  "marketplace.search": {
    en: "Search for products...",
    hi: "उत्पादों के लिए खोजें...",
    mr: "उत्पादनांसाठी शोधा...",
    gu: "ઉત્પાદનો માટે શોધો...",
    pa: "ਉਤਪਾਦਾਂ ਲਈ ਖੋਜ...",
    bn: "পণ্য খুঁজুন...",
  },
  "marketplace.filters": {
    en: "Filters",
    hi: "फिल्टर",
    mr: "फिल्टर्स",
    gu: "ફિલ્ટર્સ",
    pa: "ਫਿਲਟਰ",
    bn: "ফিল্টার",
  },
  "marketplace.sort": {
    en: "Sort",
    hi: "क्रमबद्ध करें",
    mr: "क्रमवारी लावा",
    gu: "સૉર્ટ કરો",
    pa: "ਕ੍ਰਮਬੱਧ ਕਰੋ",
    bn: "সাজান",
  },
  "marketplace.tabs.buy": {
    en: "Buy Products",
    hi: "उत्पाद खरीदें",
    mr: "उत्पादने खरेदी करा",
    gu: "ઉત્પાદનો ખરીદો",
    pa: "ਉਤਪਾਦ ਖਰੀਦੋ",
    bn: "পণ্য কিনুন",
  },
  "marketplace.tabs.sell": {
    en: "Sell Products",
    hi: "उत्पाद बेचें",
    mr: "उत्पादने विकणे",
    gu: "ઉત્પાદનો વેચો",
    pa: "ਉਤਪਾਦ ਵੇਚੋ",
    bn: "পণ্য বিক্রি করুন",
  },
  "marketplace.tabs.ai": {
    en: "AI Price Suggestions",
    hi: "एआई मूल्य सुझाव",
    mr: "एआय किंमत सूचना",
    gu: "AI ભાવ સૂચનો",
    pa: "AI ਕੀਮਤ ਸੁਝਾਅ",
    bn: "AI মূল্য পরামর্শ",
  },
  "marketplace.contactSeller": {
    en: "Contact Seller",
    hi: "विक्रेता से संपर्क करें",
    mr: "विक्रेत्याशी संपर्क साधा",
    gu: "વિક્રેતાનો સંપર્ક કરો",
    pa: "ਵਿਕਰੇਤਾ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
    bn: "বিক্রেতার সাথে যোগাযোগ করুন",
  },
  "marketplace.loadMore": {
    en: "Load More",
    hi: "और लोड करें",
    mr: "अधिक लोड करा",
    gu: "વધુ લોડ કરો",
    pa: "ਹੋਰ ਲੋਡ ਕਰੋ",
    bn: "আরও লোড করুন",
  },
  "equipment.title": {
    en: "Equipment Rental",
    hi: "उपकरण किराया",
    mr: "उपकरण भाडे",
    gu: "ઉપકરણ ભાડે",
    pa: "ਉਪਕਰਣ ਕਿਰਾਏ",
    bn: "সরঞ্জাম ভাড়া",
  },
  "equipment.subtitle": {
    en: "Rent agricultural equipment or list your own equipment for others to rent. Save on costs and increase efficiency.",
    hi: "कृषि उपकरण किराए पर लें या दूसरों के लिए अपने उपकरण सूचीबद्ध करें। लागत बचाएं और दक्षता बढ़ाएं।",
    mr: "कृषी उपकरणे भाड्याने घ्या किंवा इतरांना भाड्याने देण्यासाठी आपली स्वतःची उपकरणे सूचीबद्ध करा. खर्च वाचवा आणि कार्यक्षमता वाढवा.",
    gu: "કૃષિ સાધનો ભાડે લો અથવા અન્ય લોકો ભાડે લઈ શકે તે માટે તમારા પોતાના સાધનો સૂચિબદ્ધ કરો. ખર્ચ બચાવો અને કાર્યક્ષમતા વધારો.",
    pa: "ਖੇਤੀਬਾੜੀ ਦੇ ਉਪਕਰਣ ਕਿਰਾਏ 'ਤੇ ਲਓ ਜਾਂ ਦੂਜਿਆਂ ਨੂੰ ਕਿਰਾਏ 'ਤੇ ਦੇਣ ਲਈ ਆਪਣੇ ਉਪਕਰਣ ਸੂਚੀਬੱਧ ਕਰੋ। ਲਾਗਤ ਬਚਾਓ ਅਤੇ ਕੁਸ਼ਲਤਾ ਵਧਾਓ।",
    bn: "কৃষি যন্ত্রপাতি ভাড়া নিন বা অন্যদের ভাড়া দেওয়ার জন্য আপনার নিজের যন্ত্রপাতি তালিকাভুক্ত করুন। খরচ বাঁচান এবং দক্ষতা বাড়ান।",
  },
  "community.title": {
    en: "Farmer Community",
    hi: "किसान समुदाय",
    mr: "शेतकरी समुदाय",
    gu: "ખેડૂત સમુદાય",
    pa: "ਕਿਸਾਨ ਕਮਿਊਨਿਟੀ",
    bn: "কৃষক সম্প্রদায়",
  },
  "community.subtitle": {
    en: "Connect with other farmers, share knowledge, ask questions, and participate in events.",
    hi: "अन्य किसानों से जुड़ें, ज्ञान साझा करें, प्रश्न पूछें और कार्यक्रमों में भाग लें।",
    mr: "इतर शेतकऱ्यांशी जोडा, ज्ञान शेअर करा, प्रश्न विचारा आणि कार्यक्रमांमध्ये सहभागी व्हा.",
    gu: "અન્ય ખેડૂતો સાથે જોડાઓ, જ્ઞાન વહેંચો, પ્રશ્નો પૂછો અને કાર્યક્રમોમાં ભાગ લો.",
    pa: "ਹੋਰ ਕਿਸਾਨਾਂ ਨਾਲ ਜੁੜੋ, ਗਿਆਨ ਸਾਂਝਾ ਕਰੋ, ਸਵਾਲ ਪੁੱਛੋ, ਅਤੇ ਸਮਾਗਮਾਂ ਵਿੱਚ ਹਿੱਸਾ ਲਓ।",
    bn: "অন্যান্য কৃষকদের সাথে সংযোগ করুন, জ্ঞান ভাগ করুন, প্রশ্ন জিজ্ঞাসা করুন এবং অনুষ্ঠানে অংশগ্রহণ করুন।",
  },
  "resources.title": {
    en: "Learning Resources",
    hi: "शिक्षण संसाधन",
    mr: "शिक्षण संसाधने",
    gu: "શિક્ષણ સંસાધનો",
    pa: "ਸਿੱਖਣ ਦੇ ਸਰੋਤ",
    bn: "শিক্ষামূলক সম্পদ",
  },
  "resources.subtitle": {
    en: "Access tutorials, government schemes, and expert advice to improve your farming practices.",
    hi: "अपनी कृषि प्रथाओं को बेहतर बनाने के लिए ट्यूटोरियल, सरकारी योजनाओं और विशेषज्ञ सलाह तक पहुंच प्राप्त करें।",
    mr: "तुमच्या शेती पद्धती सुधारण्यासाठी ट्युटोरियल, सरकारी योजना आणि तज्ञ सल्ला मिळवा.",
    gu: "તમારી ખેતી પદ્ધતિઓ સુધારવા માટે ટ્યુટોરિયલ, સરકારી યોજનાઓ અને નિષ્ણાત સલાહ મેળવો.",
    pa: "ਆਪਣੀਆਂ ਖੇਤੀਬਾੜੀ ਪ੍ਰਥਾਵਾਂ ਨੂੰ ਬਿਹਤਰ ਬਣਾਉਣ ਲਈ ਟਿਊਟੋਰੀਅਲ, ਸਰਕਾਰੀ ਸਕੀਮਾਂ, ਅਤੇ ਮਾਹਿਰ ਸਲਾਹ ਤੱਕ ਪਹੁੰਚ ਕਰੋ।",
    bn: "আপনার কৃষি অনুশীলন উন্নত করতে টিউটোরিয়াল, সরকারি প্রকল্প এবং বিশেষজ্ঞ পরামর্শ অ্যাক্সেস করুন।",
  },
  "footer.copyright": {
    en: "All rights reserved.",
    hi: "सर्वाधिकार सुरक्षित।",
    mr: "सर्व हक्क राखीव.",
    gu: "બધા અધિકારો સુરક્ષિત.",
    pa: "ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ ਹਨ।",
    bn: "সর্বস্বত্ব সংরক্ষিত।",
  },
  "footer.quickLinks": {
    en: "Quick Links",
    hi: "त्वरित लिंक",
    mr: "द्रुत दुवे",
    gu: "ઝડપી લિંક્સ",
    pa: "ਤੇਜ਼ ਲਿੰਕ",
    bn: "দ্রুত লিঙ্ক",
  },
  "footer.resources": {
    en: "Resources",
    hi: "संसाधन",
    mr: "संसाधने",
    gu: "સંસાધનો",
    pa: "ਸਰੋਤ",
    bn: "সম্পদ",
  },
  "footer.contactUs": {
    en: "Contact Us",
    hi: "संपर्क करें",
    mr: "संपर्क करा",
    gu: "અમારો સંપર્ક કરો",
    pa: "ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
    bn: "যোগাযোগ করুন",
  },
  "auth.login": {
    en: "Login",
    hi: "लॉगिन",
    mr: "लॉगिन",
    gu: "લૉગિન",
    pa: "ਲੌਗਇਨ",
    bn: "লগইন",
  },
  "auth.register": {
    en: "Register",
    hi: "रजिस्टर",
    mr: "नोंदणी करा",
    gu: "રજિસ્ટર",
    pa: "ਰਜਿਸਟਰ",
    bn: "নিবন্ধন",
  },
  "auth.email": {
    en: "Email",
    hi: "ईमेल",
    mr: "ईमेल",
    gu: "ઈમેલ",
    pa: "ਈਮੇਲ",
    bn: "ইমেইল",
  },
  "auth.password": {
    en: "Password",
    hi: "पासवर्ड",
    mr: "पासवर्ड",
    gu: "પાસવર્ડ",
    pa: "ਪਾਸਵਰਡ",
    bn: "পাসওয়ার্ড",
  },
  "auth.forgotPassword": {
    en: "Forgot password?",
    hi: "पासवर्ड भूल गए?",
    mr: "पासवर्ड विसरलात?",
    gu: "પાસવર્ડ ભૂલી ગયા?",
    pa: "ਪਾਸਵਰਡ ਭੁੱਲ ਗਏ?",
    bn: "পাসওয়ার্ড ভুলে গেছেন?",
  },
  "auth.rememberMe": {
    en: "Remember me",
    hi: "मुझे याद रखें",
    mr: "मला लक्षात ठेवा",
    gu: "મને યાદ રાખો",
    pa: "ਮੈਨੂੰ ਯਾਦ ਰੱਖੋ",
    bn: "আমাকে মনে রাখুন",
  },
  "auth.createAccount": {
    en: "Create account",
    hi: "खाता बनाएं",
    mr: "खाते तयार करा",
    gu: "ખાતું બનાવો",
    pa: "ਖਾਤਾ ਬਣਾਓ",
    bn: "অ্যাকাউন্ট তৈরি করুন",
  },
  "auth.firstName": {
    en: "First name",
    hi: "पहला नाम",
    mr: "पहिले नाव",
    gu: "પ્રથમ નામ",
    pa: "ਪਹਿਲਾ ਨਾਮ",
    bn: "প্রথম নাম",
  },
  "auth.lastName": {
    en: "Last name",
    hi: "अंतिम नाम",
    mr: "आडनाव",
    gu: "છેલ્લું નામ",
    pa: "ਆਖਰੀ ਨਾਮ",
    bn: "শেষ নাম",
  },
  "auth.phoneNumber": {
    en: "Phone number",
    hi: "फोन नंबर",
    mr: "फोन नंबर",
    gu: "ફોન નંબર",
    pa: "ਫੋਨ ਨੰਬਰ",
    bn: "ফোন নম্বর",
  },
  "auth.userType": {
    en: "I am a",
    hi: "मैं हूँ",
    mr: "मी आहे",
    gu: "હું છું",
    pa: "ਮੈਂ ਹਾਂ",
    bn: "আমি একজন",
  },
  "auth.termsAgree": {
    en: "I agree to the terms and conditions",
    hi: "मैं नियम और शर्तों से सहमत हूं",
    mr: "मी नियम व अटींशी सहमत आहे",
    gu: "હું નિયમો અને શરતો સાથે સંમત છું",
    pa: "ਮੈਂ ਨਿਯਮਾਂ ਅਤੇ ਸ਼ਰਤਾਂ ਨਾਲ ਸਹਿਮਤ ਹਾਂ",
    bn: "আমি শর্তাবলী মেনে নিচ্ছি",
  },
  "equipment.rentEquipment": {
    en: "Rent Equipment",
    hi: "उपकरण किराए पर लें",
    mr: "उपकरणे भाड्याने घ्या",
    gu: "ઉપકરણ ભાડે લો",
    pa: "ਉਪਕਰਣ ਕਿਰਾਏ 'ਤੇ ਲਓ",
    bn: "সরঞ্জাম ভাড়া নিন",
  },
  "equipment.listEquipment": {
    en: "List Your Equipment",
    hi: "अपने उपकरण सूचीबद्ध करें",
    mr: "आपले उपकरणे सूचीबद्ध करा",
    gu: "તમારા ઉપકરણો સૂચિબદ્ધ કરો",
    pa: "ਆਪਣੇ ਉਪਕਰਣ ਸੂਚੀਬੱਧ ਕਰੋ",
    bn: "আপনার সরঞ্জাম তালিকাভুक্ত করুন",
  },
  "equipment.searchPlaceholder": {
    en: "Search for equipment...",
    hi: "उपकरण के लिए खोजें...",
    mr: "उपकरणांसाठी शोधा...",
    gu: "ઉપકરણ માટે શોધો...",
    pa: "ਉਪਕਰਣ ਲਈ ਖੋਜ...",
    bn: "সরঞ্জাম খুঁজুন...",
  },
  "equipment.bookNow": {
    en: "Book Now",
    hi: "अभी बुक करें",
    mr: "आता बुक करा",
    gu: "આજે જ બુક કરો",
    pa: "ਹੁਣ ਬੁਕ ਕਰੋ",
    bn: "এখনই বুক করুন",
  },
  "equipment.listEquipmentForm": {
    en: "List Your Equipment for Rent",
    hi: "अपने उपकरण किराए के लिए सूचीबद्ध करें",
    mr: "आपले उपकरणे भाड्याने देण्यासाठी सूचीबद्ध करा",
    gu: "તમારા ઉપકરણો ભાડે આપવા માટે સૂચિબદ્ધ કરો",
    pa: "ਆਪਣੇ ਉਪਕਰਣ ਕਿਰਾਏ 'ਤੇ ਦੇਣ ਲਈ ਸੂਚੀਬੱਧ ਕਰੋ",
    bn: "ভাড়া দেওয়ার জন্য আপনার সরঞ্জাম তালিকাভুक্ত করুন",
  },
  "community.discussionForum": {
    en: "Discussion Forum",
    hi: "चर्चा मंच",
    mr: "चर्चा मंच",
    gu: "ચર્ચા ફોરમ",
    pa: "ਚਰਚਾ ਫੋਰਮ",
    bn: "আলোচনা ফোরাম",
  },
  "community.upcomingEvents": {
    en: "Upcoming Events",
    hi: "आने वाली घटनाएं",
    mr: "येणारे कार्यक्रम",
    gu: "આવતા ઇવેન્ટ્સ",
    pa: "ਆਉਣ ਵਾਲੀਆਂ ਘਟਨਾਵਾਂ",
    bn: "আসন্ন ইভেন্ট",
  },
  "community.localGroups": {
    en: "Local Groups",
    hi: "स्थानीय समूह",
    mr: "स्थानीय गट",
    gu: "સ્થાનિક જૂથો",
    pa: "ਸਥਾਨਕ ਗਰੁੱਪ",
    bn: "স্থানীয় গোষ্ঠী",
  },
  "community.recentDiscussions": {
    en: "Recent Discussions",
    hi: "हाल की चर्चाएं",
    mr: "अलीकडील चर्चा",
    gu: "તાજેતરની ચર્ચાઓ",
    pa: "ਹਾਲੀਆ ਚਰਚਾਵਾਂ",
    bn: "সাম্প্রতিক আলোচনা",
  },
  "resources.tutorialsVideos": {
    en: "Tutorials & Videos",
    hi: "ट्यूटोरियल और वीडियो",
    mr: "ट्यूटोरियल्स आणि व्हिडीओ",
    gu: "ટ્યુટોરિયલ્સ અને વીડિયો",
    pa: "ਟਿਊਟੋਰੀअલ ਅਤੇ ਵੀਡੀਓ",
    bn: "টিউটোরিয়াল এবং ভিডিও",
  },
  "resources.governmentSchemes": {
    en: "Government Schemes",
    hi: "सरकारी योजनाएं",
    mr: "सरकारी योजना",
    gu: "સરકારી યોજનાઓ",
    pa: "ਸਰਕਾਰੀ ਸਕੀਮਾਂ",
    bn: "সরকারী প্রকল্প",
  },
  "resources.expertAdvice": {
    en: "Expert Advice",
    hi: "विशेषज्ञ सलाह",
    mr: "तज्ञ सल्ला",
    gu: "નિષ્ણાત સલાહ",
    pa: "ਮਾਹਿਰ ਸਲਾਹ",
    bn: "বিশেষজ্ঞ পরামর্শ",
  },
  "resources.title": {
    en: "Learning Resources",
    hi: "सीखने के संसाधन",
    mr: "शिक्षण संसाधने",
    gu: "શિક્ષણ સંસાધનો",
    pa: "ਸਿੱਖਣ ਦੇ ਸਰੋਤ",
    bn: "শেখার সংস্থান",
  },
  "resources.subtitle": {
    en: "Access tutorials, government schemes, and expert advice to improve your farming practices.",
    hi: "अपनी कृषि प्रथाओं में सुधार के लिए ट्यूटोरियल, सरकारी योजनाएं, और विशेषज्ञ सलाह प्राप्त करें।",
    mr: "तुमच्या शेतीच्या पद्धती सुधारण्यासाठी ट्यूटोरियल्स, सरकारी योजना आणि तज्ञ सल्ला प्राप्त करा.",
    gu: "તમારી ખેતી પद્ધતિઓ સુધારવા માટે ટ્યુટોરિયલ્સ, સરકારી યોજનાઓ અને નિષ્ણાત સલાહ મેળવો.",
    pa: "ਆਪਣੀ ਖੇਤੀਬਾੜੀ ਵਿਧੀਆਂ ਵਿੱਚ ਸੁਧਾਰ ਲਈ ਟਿਊਟੋਰੀअલ, ਸਰਕਾਰੀ ਯੋਜਨਾਵਾਂ ਅਤੇ ਮਾਹਿਰ ਸਲਾਹ ਪ੍ਰਾਪਤ ਕਰੋ।",
    bn: "আপনার কৃষি অনুশীলন উন্নত করতে টিউটোরিয়াল, সরকারী স্কিম এবং বিশেষজ্ঞ পরামর্শ অ্যাক্সেস করুন।",
  },
  "community.title": {
    en: "Farmer Community",
    hi: "किसान समुदाय",
    mr: "शेतकरी समुदाय",
    gu: "ખેડૂત સમુદાય",
    pa: "ਕਿਸਾਨ ਕਮਿਊਨਿਟੀ",
    bn: "কৃষক সম্প্রদায়",
  },
  "community.subtitle": {
    en: "Connect with other farmers, share knowledge, ask questions, and participate in events.",
    hi: "अन्य किसानों से जुड़ें, ज्ञान साझा करें, प्रश्न पूछें, और कार्यक्रमों में भाग लें।",
    mr: "इतर शेतकऱ्यांशी जोडा, ज्ञान शेअर करा, प्रश्न विचारा आणि कार्यक्रमांमध्ये भाग घ्या।",
    gu: "અન્ય ખેડૂતો સાથે જોડાઓ, જ્ઞાન વહેંચો, પ્રશ્નો પૂછો અને ઇવેન્ટમાં ભાગ લો।",
    pa: "ਹੋਰ ਕਿਸਾਨਾਂ ਨਾਲ ਜੁੜੋ, ਗਿਆਨ ਸਾਂਝਾ ਕਰੋ, ਸਵਾਲ ਪੁੱਛੋ, ਅਤੇ ਇਵੈਂਟਸ ਵਿੱਚ ਭਾਗ ਲਓ।",
    bn: "অন্যান্য কৃষকদের সাথে সংযোগ করুন, জ্ঞান ভাগ করুন, প্রশ্ন জিজ্ঞাসা করুন এবং ইভেন্টে অংশগ্রহণ করুন।",
  },
  "equipment.title": {
    en: "Equipment Rental",
    hi: "उपकरण किराया",
    mr: "उपकरण भाडे",
    gu: "ઉપકરણ ભાડે",
    pa: "ਉਪਕਰਣ ਕਿਰਾਏ",
    bn: "সরঞ্জাম ভাড়া",
  },
  "equipment.subtitle": {
    en: "Rent agricultural equipment or list your own equipment for others to rent. Save on costs and increase efficiency.",
    hi: "कृषि उपकरण किराए पर लें या अपने उपकरण को दूसरों के लिए सूचीबद्ध करें। लागत बचाएं और दक्षता बढ़ाएं।",
    mr: "शेती उपकरणे भाड्याने घ्या किंवा इतरांना भाड्याने देण्यासाठी आपली स्वतःची उपकरणे सूचीबद्ध करा। खर्च वाचवा आणि कार्यक्षमता वाढवा।",
    gu: "ખેતીના સાધનો ભાડે લો અથવા અન્ય લોકો ભાડે લઈ શકે તે માટે તમારા પોતાના સાધનો સૂચિબદ્ધ કરો। ખર્ચ બચાવો અને કાર્યક્ષમતા વધારો।",
    pa: "ખેતی ਦੇ ਉਪਕਰਣ ਕਿਰਾਏ 'ਤੇ ਲਓ ਜਾਂ ਦੂਜਿਆਂ ਨੂੰ ਕਿਰਾਏ 'ਤੇ ਦੇਣ ਲਈ ਆਪਣੇ ਉਪਕਰਣ ਸੂਚੀਬੱਧ ਕਰੋ। ਖਰਚ ਬਚਾਓ ਅਤੇ ਕੁਸ਼ਲਤਾ ਵਧਾਓ।",
    bn: "কৃষি সরঞ্জাম ভাড়া নিন বা অন্যদের ভাড়া দেওয়ার জন্য আপনার নিজস্ব সরঞ্জাম তালিকাভুক্ত করুন। খরচ বাঁচান এবং দক্ষতা বাড়ান।",
  },
  "marketplace.title": {
    en: "Digital Marketplace",
    hi: "डिजिटल बाज़ार",
    mr: "डिजिटल बाजारपेठ",
    gu: "ડિજિટલ બજાર",
    pa: "ਡਿਜੀਟਲ ਮਾਰਕੀਟ",
    bn: "ডিজিটাল বাজার",
  },
  "loadMore": {
    en: "Load More",
    hi: "और लोड करें",
    mr: "अधिक लोड करा",
    gu: "વધુ લોડ કરો",
    pa: "ਹੋਰ ਲੋਡ ਕਰੋ",
    bn: "আরও লোড করুন",
  },
  "loading": {
    en: "Loading...",
    hi: "लोड हो रहा है...",
    mr: "लोड होत आहे...",
    gu: "લોડ થઈ રહ્યું છે...",
    pa: "ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...",
    bn: "লোড হচ্ছে...",
  },
  "groups": {
    en: "Groups",
    hi: "समूह",
    mr: "गट",
    gu: "જૂથો",
    pa: "ਗਰੁੱਪ",
    bn: "গোষ্ঠী",
  },
  "createGroup": {
    en: "Create Group",
    hi: "समूह बनाएं",
    mr: "गट बनवा",
    gu: "જૂથ બનાવો",
    pa: "ਗਰੁੱਪ ਬਨਾਓ",
    bn: "গ্রুপ তৈরি করুন",
  },
  "joinGroup": {
    en: "Join Group",
    hi: "समूह में शामिल हों",
    mr: "गटात सामील व्हा",
    gu: "જૂથમાં જોડાઓ",
    pa: "ਗਰੁੱਪ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵ",
    bn: "গ্রুপে যোগ দিন",
  },
  "members": {
    en: "Members",
    hi: "सदस्य",
    mr: "सदस्य",
    gu: "સદસ્યો",
    pa: "ਸਦਸ਼ ਅਰ ਜਮ्ਲਵਿਅ",
    bn: "সদস্যরা",
  },
  "footer.quickLinks": {
    en: "Quick Links",
    hi: "त्वरित लिंक",
    mr: "द्रुत लिंक",
    gu: "ઝડપી લિંક",
    pa: "ਤੇ ਜ਼ਾਪੀ ਲਿਨ್ਕ",
    bn: "দ্রুত লিংক",
  },
  "footer.resources": {
    en: "Resources",
    hi: "संसाधन",
    mr: "संसाधने",
    gu: "સંસાધનો",
    pa: "ਸਰੋਤ",
    bn: "সম্পদ",
  },
  "footer.contactUs": {
    en: "Contact Us",
    hi: "हमसे संपर्क करें",
    mr: "आमच्याशी संपर्क साधा",
    gu: "અમારો સંપર્ક કરો",
    pa: "ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ",
    bn: "আমাদের সাথে যোগাযোগ করুন",
  },
  "footer.copyright": {
    en: "All rights reserved.",
    hi: "सभी अधिकार सुरक्षित हैं।",
    mr: "सर्व अधिकार सुरक्षित आहेत.",
    gu: "બધા અધિકારો આરક્ષિત છે.",
    pa: "ਤਮਾਮ ਅਧਿਕਾਰ ਸੁਰੱਖਿਅਤ ਹਨ।",
    bn: "সমস্ত অধিকার সংরক্ષিত।",
  },
  "watchTutorial": {
    en: "Watch Tutorial",
    hi: "ट्यूटोरियल देखें",
    mr: "ट्यूटोरियल पहा",
    gu: "ટ્યુટોરિયલ જુઓ",
    pa: "ਟਿਊਟੋਰੀअલ ਦੇਖੋ",
    bn: "টিউটোরিয়াল দেখুন",
  },
  "textToSpeech": {
    en: "Text to Speech",
    hi: "पाठ से वाणी",
    mr: "मजकूर ते बोलणी",
    gu: "લખાણ થી વાણી",
    pa: "ਪਾਠ ਤੋਂ ਵਾਣੀ",
    bn: "পাঠ্য থেকে বাণী",
  },
  "resources.governmentSchemesDesc": {
    en: "These schemes are designed to support farmers with financial assistance, insurance, infrastructure development, and more. Apply for eligible schemes to benefit from government support.",
    hi: "ये योजनाएं किसानों को वित्तीय सहायता, बीमा, बुनियादी ढांचे के विकास और अन्य चीजों के साथ समर्थन करने के लिए डिज़ाइन की गई हैं।",
    mr: "या योजना शेतकऱ्यांना आर्थिक सहाय्य, विमा, अधोसंरचना विकास आणि बरेच काही समर्थन देण्यासाठी डिজाइन केल्या गेल्या आहेत.",
    gu: "આ યોજનાઓ ખેડૂતોને નાણાકીય સહાય, વીમો, ઈનફ્રાસ્ટ્રક્ચર વિકાસ અને વધુ સાથે સમર્થન આપવા માટે ડિઝાઇન કરવામાં આવી છે.",
    pa: "ਇਹ ਯੋਜਨਾਵਾਂ ਕਿਸਾਨਾਂ ਨੂੰ ਵਿੱਤੀ ਸਹਾਇਤਾ, ਬੀਮਾ, ਬੁਨਿਆਦੀ ਢਾਂਚੇ ਦੇ ਵਿਕਾਸ ਅਤੇ ਹੋਰ ਬਹੁਤ ਕੁਝ ਦੇ ਨਾਲ ਸਮਰਥਨ ਕਰਨ ਲਈ ਡਿਜ਼ਾਈਨ ਕੀਤੀਆਂ ਗਈਆਂ ਹਨ।",
    bn: "এই স্কিমগুলি কৃষকদের আর্থিক সহায়তা, বীমা, অবকাঠামো উন্নয়ন এবং আরও অনেক কিছু সহ সমর্থন করার জন্য ডিজাইন করা হয়েছে।",
  },
  "resources.askExpert": {
    en: "Ask an Expert",
    hi: "विशेषज्ञ से पूछें",
    mr: "तज्ञांशी विचारा",
    gu: "નિષ્ણાતને પૂછો",
    pa: "ਮਾਹਿਰ ਨੂੰ ਪੁੱਛੋ",
    bn: "একজন বিশেষজ্ঞকে জিজ্ঞাসা করুন",
  },
  "resources.topic": {
    en: "Topic",
    hi: "विषय",
    mr: "विषय",
    gu: "વિષય",
    pa: "ਵਿਸ਼ਾ",
    bn: "বিষয়",
  },
  "resources.topicPlaceholder": {
    en: "e.g., Pest Control, Irrigation",
    hi: "उदा., कीट नियंत्रण, सिंचाई",
    mr: "उदा., कीटक नियंत्रण, सिंचन",
    gu: "દા.ત., જંતુ નિયંત્રણ, સિંચન",
    pa: "ਉਦਾ., ਕੀੜੇ ਕੰਟਰੋਲ, ਸਿੰਚਾਈ",
    bn: "যেমন, কীটপতঙ্গ নিয়ন্ত্রণ, সেচ",
  },
  "resources.yourQuestion": {
    en: "Your Question",
    hi: "आपका प्रश्न",
    mr: "आपला प्रश्न",
    gu: "તમારો પ્રશ્ન",
    pa: "ਤੁਹਾਡਾ ਪ੍ਰਸ਼ਨ",
    bn: "আপনার প্রশ্ন",
  },
  "resources.describeQuestion": {
    en: "Describe your question in detail...",
    hi: "अपने प्रश्न का विस्तार से वर्णन करें...",
    mr: "तुमचा प्रश्न तपशीलात वर्णन करा...",
    gu: "તમારો પ્રશ્નનું વિગતવાર વર્ણન કરો...",
    pa: "ਆਪਣੇ ਪ੍ਰਸ਼ਨ ਦਾ ਵਿਸਤਾਰ ਨਾਲ ਵਰਣਨ ਕਰੋ...",
    bn: "আপনার প্রশ্নটি বিস্তারিতভাবে বর্ণনা করুন...",
  },
  "resources.submitQuestion": {
    en: "Submit Question",
    hi: "प्रश्न जमा करें",
    mr: "प्रश्न सादर करा",
    gu: "પ્રશ્ન સબમિટ કરો",
    pa: "ਪ੍ਰਸ਼ਨ ਜਮा ਕਰੋ",
    bn: "প্রশ্ন জমা দিন",
  },
  "resources.expertArticles": {
    en: "Expert Advice Articles",
    hi: "विशेषज्ञ सलाह लेख",
    mr: "तज्ञ सल्ला लेख",
    gu: "નિષ્ણાત સલાહ લેખો",
    pa: "ਮਾਹਿਰ ਸਲਾਹ ਲੇਖ",
    bn: "বিশেষজ্ঞ পরামর্শ নিবন্ধ",
  },
  "resources.readArticle": {
    en: "Read Article",
    hi: "लेख पढ़ें",
    mr: "लेख वाचा",
    gu: "લેખ વાંચો",
    pa: "ਲੇਖ ਪੜ੍ਹੋ",
    bn: "নিবন্ধ পড়ুন",
  },
  "resources.viewAllArticles": {
    en: "View All Expert Articles",
    hi: "सभी विशेषज्ञ लेख देखें",
    mr: "सर्व तज्ञ लेख पहा",
    gu: "તમામ નિષ્ણાત લેખો જુઓ",
    pa: "ਸਭ ਮਾਹਿਰ ਲੇਖ ਵੇਖੋ",
    bn: "সমস্ত বিশেষজ্ঞ নিবন্ধ দেখুন",
  },
  "resources.applyNow": {
    en: "Apply Now",
    hi: "अभी आवेदन करें",
    mr: "आता अर्ज करा",
    gu: "આજે જ અરજી કરો",
    pa: "ਹੁਣ ਅਰਜ਼ੀ ਦਿਓ",
    bn: "এখনই আবেদন করুন",
  },
  "resources.eligibility": {
    en: "Eligibility",
    hi: "पात्रता",
    mr: "योग्यता",
    gu: "યોગ્યતા",
    pa: "ਯੋਗ੍ਯਤਾ",
    bn: "যোগ্যতা",
  },
  "resources.deadline": {
    en: "Deadline",
    hi: "समय सीमा",
    mr: "अंतिम दिनांक",
    gu: "સમય સીમા",
    pa: "ਸਮਾਂ ਸੀਮਾ",
    bn: "সময়সীমা",
  },
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  availableLanguages: { code: Language; name: string }[]
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const availableLanguages = [
  { code: "en" as Language, name: "English" },
  { code: "hi" as Language, name: "हिन्दी" },
  { code: "mr" as Language, name: "मराठी" },
  { code: "gu" as Language, name: "ગુજરાતી" },
  { code: "pa" as Language, name: "ਪੰਜਾਬੀ" },
  { code: "bn" as Language, name: "বাংলা" },
]

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    // Check if there's a saved language preference on mount
    const savedLanguage = localStorage.getItem("agri-nova-language") as Language
    if (savedLanguage && availableLanguages.some((lang) => lang.code === savedLanguage)) {
      setLanguageState(savedLanguage)
    }
  }, [])

  const setLanguage = useCallback((lang: Language) => {
    // Save language preference to localStorage
    localStorage.setItem("agri-nova-language", lang)
    setLanguageState(lang)
    // Broadcast language change to all instances
    window.dispatchEvent(new CustomEvent("languageChange", { detail: { language: lang } }))
  }, [])

  useEffect(() => {
    // Listen for language changes from other components
    const handleLanguageChange = (event: Event) => {
      const customEvent = event as CustomEvent
      setLanguageState(customEvent.detail.language)
    }

    window.addEventListener("languageChange", handleLanguageChange)
    return () => window.removeEventListener("languageChange", handleLanguageChange)
  }, [])

  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language]
    }
    // Fallback to English if translation not found
    return translations[key]?.en || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, availableLanguages }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
