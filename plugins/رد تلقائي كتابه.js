let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^هلا$/i.test(m.text)) { 
     responses = [ 
 '*هلا وغلا نورت ياحب🦦*'  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       '*♥🐥وعليكم السلام*',  
       '*عليكــم الســلام ورحمـة اللـه وبركـاته🤍*', 
     ]; 
   }else if (/^شيكامارو|شيكاا$/i.test(m.text)) { 
     responses = [ 
'*حل عن مطوري مش ناقصاك🐤*'
     ]; 
 }else if (/^شيكا من عمك|شيكا عمك$/i.test(m.text)) { 
     responses = [ 
'*ميسي عم الكل🐐*'
     ]; 
   }else if (/^ستورم انت مرتبط؟|ستورم هل انت مرتبط$/i.test(m.text)) { 
     responses = [ 
'*وانا لو مرتبط كنت هقعد اكلم واحد زيك🗿*',
'*يعم انا لاقي كلبه🙃💔*', 
'*بلاش احراج بقا🙂*',   
   ]; 
   }else if (/^ستورم تحبني؟|بوت تحبني$/i.test(m.text)) { 
     responses = [ 
'*جوزني تسونادي وهحبك🦦*',
'*احبك ليه كنت جورحينا؟🫠*',
'*اممم يعني🐤*',
'*اموت فيك🌚♥*', 
]; 
   }else if (/^ستورم تكرهني؟$/i.test(m.text)) { 
     responses = [ 
'*حصل🦦*',
'*مش اوي*',
'*لاياحب🌚♥*',   ]; 
     
     }else if (/^هالوووو|هالو$/i.test(m.text)) { 
     responses = [ 
       '*وعليكــم الســلام ورحمــة الله وبـركــاته🤍🗿*',  

     ]; 
}else if (/^بحبك/i.test(m.text)) { 
     responses = [ 
       '*اوف اعتراف🐤🔥*',  

     ]; 
   }else if (/^ستورم انت منين ؟$/i.test(m.text)) { 
     responses = [ 
'🗿مصر'
     ]; 
   } else if (/^احبك$/i.test(m.text)) { 
     responses = [ 
'*اوف اعتراف🐤🔥*'
     ]; 
     }else if (/^عامل ايه|عامل اي|كيفك|اخبارك$/i.test(m.text)) { 
     responses = [ 
       'الحمدالله وانت؟',  
'', 
     ];
     }else if (/^تحبني$/i.test(m.text)) { 
     responses = [ 
       '🌚♥اموت فيك', 
       '*لا انجلع🦦*', 

     ];
     }else if (/^هاي$/i.test(m.text)) { 
     responses = [ 
       'وعليكم السلام🐤',    

     ];
     }else if (/^اهلا$/i.test(m.text)) { 
     responses = [ 
       '*وسهلا🤝🏻*',  

     ]; 
     }else if (/^مساء|مساء$/i.test(m.text)) { 
     responses = [ 
       '*مساء النور*',  

     ];
     }else if (/^صباح|صباح$/ .test(m.text)) { 
     responses = [ 
       '*صباح الخير🦦♥*', 
       '*صبح صبح🦦*', 
     ];
       }else if (/^اوامر|المهام|مهام|ق1|ق2|ق3|ق4|ق5|ق6|ق7|ق8|ق9|ق10$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى ال .*',  
     ];
            }else if (/^ستورم$/i.test(m.text)) { 
     responses = [ 
       '*اخيـرا حد افتكـر اسمــي🙂💔*',  
     ];
            }else if (/^مرحبا$/i.test(m.text)) { 
     responses = [ 
       '*منور✨*',  
     ];
    }else if (/^كسمك$/i.test(m.text)) { 
     responses = [ 
'*نيكت امك في اي يامتناك🦦*', 
     ];  
        }else if (/^احا$/i.test(m.text)) { 
     responses = [ 
     '*احتيـين عل احتـك🐤*', 
     ];  
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
