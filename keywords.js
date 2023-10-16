const keywords = [
  "إسرائيلي",
  "إسرائيليه",
  "إسرائيلية",
  "اسرائيل",
  "اسرائيلي",
  "اسرائيليه",
  "اسرائيلية",
  "صهيونية",
  "صهيونيه",
  "صهاينة",
  "صهاينه",
  "صهيوني",
  "صهيون",
  "جهاد",
  "مجاهدين",
  "مقاومة",
  "حماس",
  "القسام",
  "الضيف",
  "أبو عبيدة",
  "سرايا القدس",
  "هنيه",
  "فلسطين",
  "احتلال",
  "كفر",
  "نفاق",
  "انتفاضة",
  "صلاح الدين",
  "رشاش",
  "سلاح",
  "أسلحه",
  "صاروخ",
  "صواريخ",
  "عملاء",
  "عميل",
  "قذائف",
  "قذيقة",
  "قذيفه",
  "طيارات مسيره",
  "طيارات مسيرة",
  "طائرات مسيره",
  "طائرات مسيرة",
  "تل ابيب",
  "حيفا",
  "اقتحام",
  "عميل",
  "عملاء",
  "لواء",
  "الوية",
  "إرهاب",
  "ارهاب",
  "قصف",
  "تقصف",
  "يقصف",
  "قذيفه",
  "قذيفة",
  "عبري",
  "يهود",
  "يهودي",
  "يهودية",
  "يهوديه",
  "القبة الحديدية",
  "القبه الحديدية",
  "القبه الحديديه",
  "مستوطن",
  "مستوطنين",
  "مستوطنون",
  "مستطوطنات",
  "مدفعيه",
  "مدفعية",
  "محتل",
  "محتلة",
  "عياش",
  "نتنياهو",
  "الاحتلال",
  "القصف",
  "غزة",
  "الإسرائيلي",
  "الحرية",
"لفلسطين",
"نزوح",
"القضية",
"فلسطين",
"مسلم",
"فلسطين",
"يااعداءها",
"دمار",
"هجوم",
"نابلس",
"الاستيطان",
"الجهاد",
"الاسلامي",
"ترحيل",
"طفلا",
"استيلاء",
"خزي",
"مرض",
"الاستقلال",
"المقاومه",
"الفلسطينيه",
"صاروخ",
"حي",
"الشيخ",
"جراح.",
"حي",
"الشيخ",
"جراح.",
"عرقلة",
"حماية",
"القتل",
"عرض",
"اعراض",
"محتل",
"الانفجار",
"منين",
"عزل",
"براءة",
"اسري",
"اسماعيل",
"هنيه",
"تمزيق",
"مجاعة",
"طرد",
"النزيف",
"الاقتتال",
"قذف",
"رحيم",
"الجيش",
"الإسرائيلي",
"قنبلة",
"كيميائية",
"ياسر",
"اسلام",
"جندي",
"اضرار",
"شريط",
"غزه",
"عز",
"الدين",
"القسام",
"الضفه",
"الشرقيه",
"النيران",
"العمى",
"فلسطيني",
"جريح",
"قتله",
"قطاع",
"غزه",
"القدس",
"الغربية",
"غزاوي",
"اصفاد",
"تردي",
"قوة",
"حبس",
"انفرادي",
"خطر",
"قضيه",
"اذلال",
"الفلسطينيه",
"المستوطنين",
"تحرير",
"فلسطين",
"الغنية",
"بلطجة",
"الاسرائيلي",
"اسرائيل",
"قتلة",
"الأطفال",
"الجنود",
"الصهاينة",
"شهداء",
"الرنتيسي",
"الصهيونى",
"فقدان",
"العقل",
"الويل",
"كتائب",
"الإسرائيلي",
"تدليس",
"مجرمين",
"التفجير",
"الانتحاري",
"الالغام",
"يهودى",
"الاطفال",
"الطرد",
"خنق",
"رعب",
"طلق",
"ناري",
"قنبلة",
"ذرية",
"فقدان",
"توفي",
"سلاح",
"كيميائي",
"كرب",
"أطفال",
"القذف",
"الهجوم",
"انحراف",
"هذيان",
"هتلر",
"علل",
"تصفية",
"سلاسل",
"بيت",
"لحم",
"الانفاق",
"اسير",
"الاستيلاء",
"اباده",
"الجرحي",
"الرشق",
"الوفاة",
"عيب",
"المجاهدين",
"الفسفور",
"الأبيض",
"الموت",
"عرب",
"الأطفال",
"الاكتئاب",
"صهيوني",
"اسلحة",
"الجرحى",
"العنف",
"الثوره",
"انتهاك",
"كتايب",
"القسام",
"كتايب",
"القسام",
"الجندي",
"صد",
"القطاع",
"إحباط",
"اسقطت",
"انفجار",
"الاشتباك",
"بئر",
"السبع",
"مجاهدين",
"الانتفاضة",
"ركل",
"نار",
"رشاقة",
"غصب",
"المقاومة",
"الفلسطينية",
"الكلمة",
"رشقة",
"طائرات",
"مروحيه",
"اهانة",
"تلكرم",
"دبح",
"المصابين",
"زلزلة",
"عبيدة",
"تشويش",
"فلسطينية",
"هبوط",
"القدس",
"الشرقية",
"اضطهاد",
"اجتياح",
"الرملة",
"الفوسفور",
"الابيض",
"السرطان",
"نسف",
"ألجهاد",
"أليهود",
"تدمير",
"فلسطينيه",
"أسرى",
"الخونة",
"تحطيم",
"استسلام",
"استنزاف",
"حيفا",
"عسكرية",
"الانتفاضه",
"ادعم",
"اللعنة",
"مجاهد",
"مجندون",
"قنابل",
"قصف",
"قسام",
"ارض",
"الاراضي",
"المحتلةالاراضي",
"المحتلة",
"تفجيرات",
"قضية",
"عدو",
"الدين",
"احمد",
"ياسين",
"انقسام",
"انتفاضه",
"أحمد",
"ياسين",
"طفلاً",
"احباط",
"المسلمات",
"لليهود",
"حركه",
"لكم",
"مسلمة",
"توسع",
"فضيحة",
"الاقصى",
"انحطاط",
"ثورة",
"تعذيب",
"قاوم",
"يافا",
"النضال",
"القاء",
"الكيبوتس",
"الخنازير",
"رشقات",
"الايدز",
"نتنياهو",
"جريمة",
"غزو",
"عسكري",
"إخضاع",
"المحتل",
"محنة",
"هوان",
"حرمان",
"اكمام",
"الغارات",
"رصاص",
"قنبلة",
"بيولوجية",
"موت",
"المسجد",
"حزب",
"الله",
"حزب",
"الله",
"جلد",
"تهجير",
"بكتيريا",
"فاقة",
"أوسلو",
"أوسلو",
"الاقتلاع",
"سقوط",
"ردع",
"ضعف",
"السمع",
"منتهك",
"العذاب",
"حطام",
"فلسطينيا",
"قمع",
"الدبابات",
"زجر",
"المقاومة",
"انشطار",
"العدوان",
"دير",
"البلح",
"فقدان",
"السمع",
"آر",
"بي",
"جي",
"ظلم",
"جرثومة",
"فقدان",
"البصر",
"ترويع",
"خونه",
"الاستعمار",
"خراب",
"استقلال",
"جروح",
"المستوطنات",
"النار",
"قوات",
"مسلحة",
"الشهيد",
"غارة",
"مستوطنات",
"الخلاف",
"عكا",
"شقاء",
"عار",
"إبادة",
"الاسرائيلى",
"إخلاء",
"همجية",
"الزواري",
"حملات",
"الصمم",
"غياب",
"قيود",
"القضيه",
"تدهور",
"التشوه",
"ارهاب",
"الأقصي",
"غفلة",
"مسامير",
"أسرائيل",
"الفوسفات",
"الأبيض",
"ميكروب",
"قطاع",
"غزة",
"الكفار",
"بشعة",
"فلسطين",
"محمية",
"من",
"رب",
"البرية",
"وطن",
"معسكرات",
"الحدود",
"ابو",
"عبيدة",
"يهود",
"وفيات",
"الصهاينه",
"ميوعة",
"تسرب",
"اشعاعي",
"رشاقه",
"الاراضي",
"الفلسطينية",
"الانتهاك",
"بتر",
"جوع",
"الجنون",
"الاقصي",
"شر",
"هاون",
"اسلحة",
"الدمار",
"الشامل",
"معبر",
"رفح",
"معزل",
"الخراب",
"نزيف",
"اجرام",
"فصيل",
"هجرة",
"آلام",
"جبان",
"سلاح",
"دينية",
"دينية",
"العسكرية",
"العسكرية",
"أزمة",
"السياسة",
"انطفاء",
"الصواريخ",
"بيوت",
"منع",
"رحمه",
"براغي",
"عسقلان",
"الاسلحة",
"الكيميائية",
"دفاع",
"طوفان",
"الاقصى",
"الرعب",
"الانتحاري",
"غاشم",
"الفلسطينية",
"اخرجوا",
"قطاع",
"عز",
"الملاعين",
"اطلاق",
"تفتت",
"إطلاق",
"التهجير",
"الصدمة",
"جهاديين",
"صواريخ",
"شظف",
"دماء",
"اضطراب",
"ما",
"بعد",
"الصدمة",
"قذائف",
"امراض",
"اسرائيليون",
"إنذار",
"صفارات",
"تصدع",
"كبل",
"فلسطين",
"قوية",
"تشتت",
"شنق",
"تفجير",
"حرب",
"سحق",
"مناورات",
"تقطيع",
"المواجهة",
"احتجاز",
"تمدد",
"تطهير",
"هدم",
"المجاهدون",
"حقارة",
"جنوب",
"غزة",
"قردة",
"معاناة",
"الامراض",
"ثوره",
"صفع",
"وباء",
"عامل",
"بيولوجي",
"حروب",
"عوز",
"جند",
"جيوش",
"ضياع",
"عرفات",
"نزف",
"الاسري",
"تفكك",
"القتال",
"سجان",
"الغزو",
"طعن",
"غليظ",
"دمر",
"الطائرات",
"الأنفاق",
"شهيد",
"رادع",
"عسكريون",
"استشهاد",
"سرايا",
"القدس",
"إباده",
"الأسري",
"ترهيب",
"مقاومة",
"الحرق",
"الاراضي",
"القنابل",
"الاعتداء",
"فناء",
"رفقات",
"المدنيين",
"الأمريكان",
"وجع",
"هتك",
"الغاشم",
"القدس",
"المحتله",
"أسير",
"ابادة",
"الإسلامية",
"اسرائيلي",
"العته",
"حرة",
"الدخان",
"اوبئة",
"التمدد",
"الذخيرة",
"أحرار",
"قنابل",
"الفسفور",
"التصعيد",
"حروق",
"مروحية",
"شل",
"اشعاع",
"كتائب",
"القسام",
"التصفية",
"خسيس",
"انحلال",
"جهاد",
"قتال",
"ايران",
"حمق",
"الكفر",
"قذيفة",
"جنون",
"الحمد",
"الضحية",
"حرية",
"خان",
"يونس",
"التفجير",
"الشهداء",
"تشظي",
"دين",
"رهائن",
"حرق",
"قتل",
"الرصاص",
"الحريق",
"المعركة",
"النزاع",
"اشتباكات",
"فقر",
"خسارة",
"انفاق",
"الاضطهاد",
"إسرائيل",
"التطهير",
"خطف",
"غزة",
"اتلاف",
"معبر",
"مسلمين",
"مقاومين",
"الإسرائيلية",
"الإسرائيلية",
"الجريح",
"الكيان",
"الصهيوني",
"تصعيد",
"سفه",
"غزه",
"العدو",
"فصائل",
"الضفه",
"الغربيه",
"إيران",
"كتائب",
"الشهيد",
"عز",
"الدين",
"القسام",
"كراهية",
"القلق",
"انهيار",
"الزهار",
"فلسطسن",
"غصب",
"عنكم",
"اسرائيليات",
"بلا",
"هويه",
"بلاء",
"الصراع",
"تهديد",
"خنازير",
"جرائم",
"غباء",
"صهاينة",
"مقاومة",
"",
"حماس",
"جرحي",
"تيه",
"الجثث",
"نجسة",
"معتقل",
"مجزرة",
"تلف",
"الاعصاب",
"تل",
"أبيب",
"عسكر",
"الهلع",
"اغتصاب",
"الشرقيه",
"محمد",
"الضيف",
"مستوطنين",
"تسليح",
"نصر",
"الاضرار",
"الصحية",
"تسمم",
"فوضى",
"بطش",
"اسماعيل",
"هنية",
"سحل",
"طوفان",
"الحصار",
"الاضطرابات",
"النفسية",
"اسرى",
"بني",
"صهيون",
"أبشع",
"رمي",
"طوفان",
"الأقصى",
"عساكر",
"قهر",
"كتيبة",
"مُدان",
"دعم",
"كيبوتس",
"الفسفور",
"الابيض",
"بيت",
"المقدس",
"اضطراب",
"سكان",
"القرآن",
"فظاظة",
"مفرط",
"ذبح",
"الفلسطيني",
"الجيش",
"الاسرائيلي",
"اصابات",
"القصف",
"جرحى",
"اطفال",
"التشوهات",
"الخلقية",
"جثة",
"خيانه",
"الإسلام",
"الانقاض",
"القدس",
"الغربيه",
"الابادة",
"الكفاح",
"قسوة",
"صهاينه",
"قدس",
"الاوبئة",
"مجندات",
"عبد",
"العزيز",
"الرنتيسي",
"سلام",
"وعيد",
"المتصهينين",
"العرب",
"تخويف",
"العقم",
"الضفة",
"الشرقية",
"اختطاف",
"ابو",
"عبيده",
"حدود",
"الاستشهادي",
"الاسلحة",
"تحرير",
"القدس",
"جهل",
"فلسطين",
"المحتلة",
"فلسطين",
"المحتلة",
"ذنب",
"اللهب",
"إذعان",
"الايذاء",
"طالبان",
"عنف",
"القنص",
"القدس",
"رفح",
"ذهاب",
"زوال",
"كورنيت",
"رحيل",
"ضرب",
"الارق",
"جثث",
"اسرائيليين",
"دوس",
"التحرير",
"أريحا",
"اولاد",
"العم",
"اليهود",
"سجن",
"الحطام",
"بؤس",
"الفلسطينين",
"فيروس",
"الاضطراب",
"قذيفه",
"غاره",
"اقتلاع",
"الضفة",
"الغربية",
"احتلال",
"خيانة",
"جنين",
"عسكريين",
"المفرقعات",
"اولاد",
"العم",
"رام",
"الله",
"شدة",
"التوسع",
"معاملة",
"رحمة",
"ارتباك",
"عمى",
"قنبلة",
"نووية",
"اطلاق",
"النار",
"مجازر",
"المقاومه",
"الفوسفات",
"الابيض",
"تل",
"ابيب",
"حماس",
"الشلل",
"ضرر",
"الثورة",
"أبو",
"عبيدة",
"صليبية",
"اللد",
"تحرش",
"اطواق",
"صهيونية",
"مستوطن",
"احراق",
"صهيون",
"مسجد",
"أطلاق",
"قرآن",
"كتائب",
"القسام",
"كتائب",
"القسام",
"لعنة",
"الله",
"الم",
"غاز",
"سام",
"استيطان",
"وفاة",
"الغارة",
"الاحتلال",
"الأسرى",
"الدمار",
"أشلاء",
"غارات",
"الأقصى",
"يبيد",
"اعدام",
"دم",
"عته",
"الإسلامي",
"ضلال",
"فتح",
"عذاب",
"يهودي",
"تلوث",
"الضيف",
"تخريب",
"تعطيل",
"بربريةبربرية",
"مقاطعة",
"المتفجرات",
"سم",
"الجهاد",
"الإسلامي",
"إستعمار",
"الكيان",
"فلسطين",
"عربية",
"قنبلة",
"الذعر",
"السلام",
"حركة",
"الجهاد",
"الاسلامي",
"كسر",
"الجهاد",
"عدوان",
"استعمار",
"إدانات",
"خمود",
"القسام",
"حصار",
"قائد",
"المقاومة",
"هزيمة",
"جر",
"الالم",
"متفجرات",
"تمزق",
"إفشال",
"السرقة",
"اغلال",
"الصهيوني",
"فلسطين",
"يا",
"محتلينها",
"كفاح",
"إستيطان",
"فساد",
"جماعية",
"سجين",
"السياسين",
"القمع",
"أسلحة",
"انفصال",
"ذل",
"الحرب",
"المدافع",
"الاقتحام",
"جنود",
"الخليل",
"الارهاب",
"قيد",
"انتفاضة",
"حركة",
"الخوف",
"القذائف",
"خضوع",
"غلاف",
"غزه",
"الخسائر",
"نساء",
"الاعاقة",
"الضفة",
"اسقام"
];