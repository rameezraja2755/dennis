export const routes = [{
  topic: '1000_Mietwohnung',
  path: '1000_Mietwohnung',
  nextPath: '1000_Mietwohnung/1100_Planung',
  prevPath: null,
  tags: ['AI', 'CS'],
  subRoutes: [
    {
      topic: '1100_Planung',
      path: '1000_Mietwohnung/1100_Planung',
      nextPath: '1000_Mietwohnung/1100_Planung/1110_Kuendigung',
      prevPath: '1000_Mietwohnung',
      tags: ['HS', 'AI'],
      subRoutes: [{
        topic: '1110_Kuendigung',
        path: '1000_Mietwohnung/1100_Planung/1110_Kuendigung',
        nextPath: '1000_Mietwohnung/1100_Planung/1110_Kuendigung/1111_Wasbeachten',
        prevPath: '1000_Mietwohnung/1100_Planung',
        tags: ['SF', 'HQ'],
        subRoutes: [{
          nextPath: '1000_Mietwohnung/1100_Planung/1120_WohnungsuebergabeAuszug',
          prevPath: '1000_Mietwohnung/1100_Planung/1110_Kuendigung',
          path: '1000_Mietwohnung/1100_Planung/1110_Kuendigung/1111_Wasbeachten',
          topic: '1111_Wasbeachten',
          tags: ['QW', 'IO'],
        }]
      }, {
        topic: '1120_WohnungsuebergabeAuszug',
        path: '1000_Mietwohnung/1100_Planung/1120_WohnungsuebergabeAuszug',
        nextPath: '1000_Mietwohnung/1100_Planung/1120_WohnungsuebergabeAuszug/1121_Protokoll',
        prevPath: '1000_Mietwohnung/1100_Planung/1110_Kuendigung/1111_Wasbeachten',
        tags: ['NJ', 'LK'],
        subRoutes: [{
          path: '1000_Mietwohnung/1100_Planung/1120_WohnungsuebergabeAuszug/1121_Protokoll',
          topic: '1121_Protokoll',
          nextPath: null,
          prevPath: '1000_Mietwohnung/1100_Planung/1120_WohnungsuebergabeAuszug',
          tags: ['RJ', 'AI'],
        }, {
          topic: '1122_Mietkaution',
          path: '1000_Mietwohnung/1100_Planung/1120_WohnungsuebergabeAuszug/1122_Mietkaution',
          nextPath: null,
          prevPath: '1000_Mietwohnung/1100_Planung/1120_WohnungsuebergabeAuszug/1121_Protokoll',
          tags: ['JZ', 'AZ'],
        }, {
          topic: '1123_Nachsendeauftrag',
          path: '1000_Mietwohnung/1100_Planung/1120_WohnungsuebergabeAuszug/1123_Nachsendeauftrag',
          nextPath: null,
          prevPath: '1000_Mietwohnung/1100_Planung/1120_WohnungsuebergabeAuszug/1122_Mietkaution',
          tags: ['BG', 'LK'],
        }]
      }]
    }
  ]
}]


