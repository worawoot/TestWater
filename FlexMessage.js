// --- โครงสร้าง FLEX MESSAGE สำหรับแจ้งการรับเรื่องสำเร็จ ---
function getSuccessFlexMessage(reportId, name, location) {
  var flexContent = {
    "type": "bubble",
    "header": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "💧 แจ้งเหตุน้ำรั่วสำเร็จ 💧",
          "weight": "bold",
          "size": "xl",
          "color": "#1A75BB",
          "align": "center"
        }
      ],
      "paddingAll": "20px",
      "backgroundColor": "#E9F5FF"
    },
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "ขอบคุณสำหรับการแจ้งเหตุ ทีมงานได้รับข้อมูลแล้ว และจะดำเนินการตรวจสอบโดยเร็วที่สุด",
          "wrap": true,
          "size": "sm",
          "margin": "md",
          "color": "#333333"
        },
        {
          "type": "separator",
          "margin": "lg"
        },
        {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "text",
                  "text": "รหัสแจ้งเหตุ",
                  "color": "#AAAAAA",
                  "size": "sm",
                  "flex": 4
                },
                {
                  "type": "text",
                  "text": `#${reportId}`,
                  "wrap": true,
                  "color": "#1A75BB",
                  "size": "sm",
                  "align": "end",
                  "weight": "bold",
                  "flex": 6
                }
              ]
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "text",
                  "text": "ชื่อผู้แจ้ง",
                  "color": "#AAAAAA",
                  "size": "sm",
                  "flex": 4
                },
                {
                  "type": "text",
                  "text": name,
                  "wrap": true,
                  "size": "sm",
                  "align": "end",
                  "flex": 6
                }
              ],
              "margin": "sm"
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "text",
                  "text": "พื้นที่ที่แจ้ง",
                  "color": "#AAAAAA",
                  "size": "sm",
                  "flex": 4
                },
                {
                  "type": "text",
                  "text": location,
                  "wrap": true,
                  "size": "sm",
                  "align": "end",
                  "flex": 6
                }
              ],
              "margin": "sm"
            }
          ],
          "paddingAll": "10px",
          "backgroundColor": "#F7F9FB",
          "cornerRadius": "md",
          "margin": "lg"
        }
      ]
    },
    "footer": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "button",
          "style": "primary",
          "action": {
            "type": "uri",
            "label": "ดูสถานะล่าสุด",
            "uri": "https://www.google.com/search?q=สถานะน้ำประปา" // เปลี่ยนเป็น URL เช็คสถานะจริง
          },
          "color": "#1A75BB"
        }
      ]
    }
  };
  return flexContent;
}
