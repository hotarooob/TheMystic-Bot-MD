let handler = async (m, { conn, args, usedPrefix, command }) => {
  conn.relayMessage(m.chat, {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: {
            title: '*المطور الوكارد*'
          },
          body: {
            text: '*🦇هنا تجد كل ما يتعلق بالمطور🦇*'
          },
          nativeFlowMessage: {
            buttons: [
              {
                name: 'single_select',
                buttonParamsJson: JSON.stringify({
                  title: '🦇قائمة معلومات الوكارد🦇',
                  sections: [
                    {
                      title: 'List',
                      highlight_label: 'ON',
                      rows: [
                        {
                          header: 'اضغط هنا من اجل 👇',
                          title: 'رقم المطور',
                          description: '',
                          id: '.مالك'
                        },
                                      {
                          header: 'اضغط هنا من اجل 👇',
                          title: 'انستا المطور',
                          description: '',
                          id: '.انستا'
                        },
                        {
                          header: 'اضغط هنا من اجل 👇',
                          title: 'جروب الدعم',
                          description: '',
                          id: '.الدعم'
                        }
                      ]
                    }
                  ]
                }),
                messageParamsJson: 'ر'
              }
            ]
          }
        }
      }
    }
  }, {})

}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['المطور']

export default handler
