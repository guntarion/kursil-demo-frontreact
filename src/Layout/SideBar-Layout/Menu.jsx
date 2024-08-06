import { HomeSvg, SamplePageSvg } from '../../Data/svgIcons';

export const MENUITEMS = [
    // {
    //     menutitle: 'Sample Page',
    //     Items: [
    //         {
    //             title: 'Sample Page', icon: HomeSvg, type: 'sub', active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/sample-page`, icon: SamplePageSvg, title: 'Sample Page', type: 'link' }
    //             ]
    //         },
    //     ]
    // },
    {
        menutitle: 'Kursil',
        Items: [
            {
              title: 'Kurikulum Silabus',
              badge2: true,
              icon: HomeSvg,
              type: 'sub',
              active: true,
              children: [
                {
                  active: false,
                  path: `${process.env.PUBLIC_URL}/kursil/generate-topic`,
                  title: 'Generate Topic',
                  type: 'link',
                },
                {
                  active: false,
                  path: `${process.env.PUBLIC_URL}/kursil/main-topics`,
                  title: 'Main Topic',
                  type: 'link',
                },
                

              ],
            },
            
        ]
    },
    {
        menutitle: 'FiturTambahan',
        Items: [
            {
              title: 'Additional Features',
              badge2: true,
              icon: SamplePageSvg,
              type: 'sub',
              active: true,
              children: [
                {
                  active: false,
                  path: `${process.env.PUBLIC_URL}/fitur/rag`,
                  title: 'Ask Kursil',
                  type: 'link',
                },
                {
                  active: false,
                  path: `${process.env.PUBLIC_URL}/fitur/vsjobdesc`,
                  title: 'vs JobDesc',
                  type: 'link',
                },
                {
                  active: false,
                  path: `${process.env.PUBLIC_URL}/fitur/narasi`,
                  title: 'Narasi',
                  type: 'link',
                },

              ],
            },

        ]
    },
    
];
