(window.webpackJsonp=window.webpackJsonp||[]).push([[56,185,186,187,188,189],{226:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){var n;a=a||{},n="string"==typeof i[e]?i[e]:1===t?i[e].one:i[e].other.replace("{{count}}",t);if(a.addSuffix)return a.comparison>0?"σε "+n:n+" πριν";return n};var i={lessThanXSeconds:{one:"λιγότερο από ένα δευτερόλεπτο",other:"λιγότερο από {{count}} δευτερόλεπτα"},xSeconds:{one:"1 δευτερόλεπτο",other:"{{count}} δευτερόλεπτα"},halfAMinute:"μισό λεπτό",lessThanXMinutes:{one:"λιγότερο από ένα λεπτό",other:"λιγότερο από {{count}} λεπτά"},xMinutes:{one:"1 λεπτό",other:"{{count}} λεπτά"},aboutXHours:{one:"περίπου 1 ώρα",other:"περίπου {{count}} ώρες"},xHours:{one:"1 ώρα",other:"{{count}} ώρες"},xDays:{one:"1 ημέρα",other:"{{count}} ημέρες"},aboutXWeeks:{one:"περίπου 1 εβδομάδα",other:"περίπου {{count}} εβδομάδες"},xWeeks:{one:"1 εβδομάδα",other:"{{count}} εβδομάδες"},aboutXMonths:{one:"περίπου 1 μήνας",other:"περίπου {{count}} μήνες"},xMonths:{one:"1 μήνας",other:"{{count}} μήνες"},aboutXYears:{one:"περίπου 1 χρόνο",other:"περίπου {{count}} χρόνια"},xYears:{one:"1 χρόνο",other:"{{count}} χρόνια"},overXYears:{one:"πάνω από 1 χρόνο",other:"πάνω από {{count}} χρόνια"},almostXYears:{one:"περίπου 1 χρόνο",other:"περίπου {{count}} χρόνια"}};e.exports=t.default},227:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,n=(i=a(54))&&i.__esModule?i:{default:i};var r={date:(0,n.default)({formats:{full:"EEEE, d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"d/M/yy"},defaultWidth:"full"}),time:(0,n.default)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:(0,n.default)({formats:{full:"{{date}} - {{time}}",long:"{{date}} - {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};t.default=r,e.exports=t.default},228:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,n){var r=i[e];return"function"==typeof r?r(t,a,n):r};var i={lastWeek:function(e){switch(e.getUTCDay()){case 6:return"'το προηγούμενο' eeee 'στις' p";default:return"'την προηγούμενη' eeee 'στις' p"}},yesterday:"'χθες στις' p",today:"'σήμερα στις' p",tomorrow:"'αύριο στις' p",nextWeek:"eeee 'στις' p",other:"P"};e.exports=t.default},229:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,n=(i=a(55))&&i.__esModule?i:{default:i};var r={ordinalNumber:function(e,t){var a=String((t||{}).unit);return e+("year"===a||"month"===a?"ος":"week"===a||"dayOfYear"===a||"day"===a||"hour"===a||"date"===a?"η":"ο")},era:(0,n.default)({values:{narrow:["πΧ","μΧ"],abbreviated:["π.Χ.","μ.Χ."],wide:["προ Χριστού","μετά Χριστόν"]},defaultWidth:"wide"}),quarter:(0,n.default)({values:{narrow:["1","2","3","4"],abbreviated:["Τ1","Τ2","Τ3","Τ4"],wide:["1ο τρίμηνο","2ο τρίμηνο","3ο τρίμηνο","4ο τρίμηνο"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,n.default)({values:{narrow:["Ι","Φ","Μ","Α","Μ","Ι","Ι","Α","Σ","Ο","Ν","Δ"],abbreviated:["Ιαν","Φεβ","Μάρ","Απρ","Μάι","Ιούν","Ιούλ","Αύγ","Σεπ","Οκτ","Νοέ","Δεκ"],wide:["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάιος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος"]},defaultWidth:"wide",formattingValues:{narrow:["Ι","Φ","Μ","Α","Μ","Ι","Ι","Α","Σ","Ο","Ν","Δ"],abbreviated:["Ιαν","Φεβ","Μαρ","Απρ","Μαΐ","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"],wide:["Ιανουαρίου","Φεβρουαρίου","Μαρτίου","Απριλίου","Μαΐου","Ιουνίου","Ιουλίου","Αυγούστου","Σεπτεμβρίου","Οκτωβρίου","Νοεμβρίου","Δεκεμβρίου"]},defaultFormattingWidth:"wide"}),day:(0,n.default)({values:{narrow:["Κ","Δ","T","Τ","Π","Π","Σ"],short:["Κυ","Δε","Τρ","Τε","Πέ","Πα","Σά"],abbreviated:["Κυρ","Δευ","Τρί","Τετ","Πέμ","Παρ","Σάβ"],wide:["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο"]},defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:{narrow:{am:"πμ",pm:"μμ",midnight:"μεσάνυχτα",noon:"μεσημέρι",morning:"πρωί",afternoon:"απόγευμα",evening:"βράδυ",night:"νύχτα"},abbreviated:{am:"π.μ.",pm:"μ.μ.",midnight:"μεσάνυχτα",noon:"μεσημέρι",morning:"πρωί",afternoon:"απόγευμα",evening:"βράδυ",night:"νύχτα"},wide:{am:"π.μ.",pm:"μ.μ.",midnight:"μεσάνυχτα",noon:"μεσημέρι",morning:"πρωί",afternoon:"απόγευμα",evening:"βράδυ",night:"νύχτα"}},defaultWidth:"wide"})};t.default=r,e.exports=t.default},230:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a(56)),n=r(a(57));function r(e){return e&&e.__esModule?e:{default:e}}var o={ordinalNumber:(0,i.default)({matchPattern:/^(\d+)(ος|η|ο)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(πΧ|μΧ)/i,abbreviated:/^(π\.?\s?χ\.?|π\.?\s?κ\.?\s?χ\.?|μ\.?\s?χ\.?|κ\.?\s?χ\.?)/i,wide:/^(προ Χριστο(ύ|υ)|πριν απ(ό|ο) την Κοιν(ή|η) Χρονολογ(ί|ι)α|μετ(ά|α) Χριστ(ό|ο)ν|Κοιν(ή|η) Χρονολογ(ί|ι)α)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^π/i,/^(μ|κ)/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^τ[1234]/i,wide:/^[1234]ο? τρ(ί|ι)μηνο/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[ιφμαμιιασονδ]/i,abbreviated:/^(ιαν|φεβ|μ[άα]ρ|απρ|μ[άα][ιΐ]|ιο[ύυ]ν|ιο[ύυ]λ|α[ύυ]γ|σεπ|οκτ|νο[έε]|δεκ)/i,wide:/^(μ[άα][ιΐ]|α[ύυ]γο[υύ]στ)(ος|ου)|(ιανου[άα]ρ|φεβρου[άα]ρ|μ[άα]ρτ|απρ[ίι]λ|ιο[ύυ]ν|ιο[ύυ]λ|σεπτ[έε]μβρ|οκτ[ώω]βρ|νο[έε]μβρ|δεκ[έε]μβρ)(ιος|ίου)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ι/i,/^φ/i,/^μ/i,/^α/i,/^μ/i,/^ι/i,/^ι/i,/^α/i,/^σ/i,/^ο/i,/^ν/i,/^δ/i],any:[/^ια/i,/^φ/i,/^μ[άα]ρ/i,/^απ/i,/^μ[άα][ιΐ]/i,/^ιο[ύυ]ν/i,/^ιο[ύυ]λ/i,/^α[ύυ]/i,/^σ/i,/^ο/i,/^ν/i,/^δ/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^[κδτπσ]/i,short:/^(κυ|δε|τρ|τε|π[εέ]|π[αά]|σ[αά])/i,abbreviated:/^(κυρ|δευ|τρι|τετ|πεμ|παρ|σαβ)/i,wide:/^(κυριακ(ή|η)|δευτ(έ|ε)ρα|τρ(ί|ι)τη|τετ(ά|α)ρτη|π(έ|ε)μπτη|παρασκευ(ή|η)|σ(ά|α)ββατο)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^κ/i,/^δ/i,/^τ/i,/^τ/i,/^π/i,/^π/i,/^σ/i],any:[/^κ/i,/^δ/i,/^τρ/i,/^τε/i,/^π[εέ]/i,/^π[αά]/i,/^σ/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(πμ|μμ|μεσ(ά|α)νυχτα|μεσημ(έ|ε)ρι|πρω(ί|ι)|απ(ό|ο)γευμα|βρ(ά|α)δυ|ν(ύ|υ)χτα)/i,any:/^([πμ]\.?\s?μ\.?|μεσ(ά|α)νυχτα|μεσημ(έ|ε)ρι|πρω(ί|ι)|απ(ό|ο)γευμα|βρ(ά|α)δυ|ν(ύ|υ)χτα)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^πμ|π\.\s?μ\./i,pm:/^μμ|μ\.\s?μ\./i,midnight:/^μεσάν/i,noon:/^μεσημ(έ|ε)/i,morning:/πρω(ί|ι)/i,afternoon:/απ(ό|ο)γευμα/i,evening:/βρ(ά|α)δυ/i,night:/ν(ύ|υ)χτα/i}},defaultParseWidth:"any"})};t.default=o,e.exports=t.default},768:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=u(a(226)),n=u(a(227)),r=u(a(228)),o=u(a(229)),d=u(a(230));function u(e){return e&&e.__esModule?e:{default:e}}var l={code:"el",formatDistance:i.default,formatLong:n.default,formatRelative:r.default,localize:o.default,match:d.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=l,e.exports=t.default}}]);