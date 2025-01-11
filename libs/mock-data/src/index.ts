import { EChartsCoreOption } from 'echarts';

export interface AdSet {
  adSetName: string;
  campaignName: string;
  targetAudience: string;
  dailyBudget: number;
  platform: string;
  clicks: number;
  impressions: number;
  ctr: number;
}

export const ADSET_DATA = [
  {
    adSetName: 'Splash Sale - Women 18-24',
    campaignName: 'Summer Splash Sale',
    targetAudience: 'Women, 18-24, USA',
    dailyBudget: 500,
    platform: 'Facebook',
    clicks: 600,
    impressions: 20000,
    ctr: 3.0,
  },
  {
    adSetName: 'Splash Sale - Men 25-34',
    campaignName: 'Summer Splash Sale',
    targetAudience: 'Men, 25-34, USA',
    dailyBudget: 500,
    platform: 'Facebook',
    clicks: 600,
    impressions: 25000,
    ctr: 2.4,
  },
  {
    adSetName: 'Clearance - Tech Enthusiasts',
    campaignName: 'Winter Clearance',
    targetAudience: 'Men and Women, 18-35, Tech Interests',
    dailyBudget: 300,
    platform: 'Google Ads',
    clicks: 400,
    impressions: 15000,
    ctr: 2.7,
  },
  {
    adSetName: 'Trends Launch - Fashion Lovers',
    campaignName: 'Tech Trends Launch',
    targetAudience: 'Women, 18-30, Fashion Interests',
    dailyBudget: 700,
    platform: 'Instagram',
    clicks: 800,
    impressions: 30000,
    ctr: 2.6,
  },
  {
    adSetName: 'Spring Promo - Urban Areas',
    campaignName: 'Spring Collection Promo',
    targetAudience: 'Urban, 20-40, Interests: Shopping',
    dailyBudget: 1000,
    platform: 'TikTok',
    clicks: 900,
    impressions: 35000,
    ctr: 2.6,
  },
  {
    adSetName: 'New Arrivals - Students',
    campaignName: 'New Arrivals Campaign',
    targetAudience: 'Students, 18-25, Online Shoppers',
    dailyBudget: 400,
    platform: 'Facebook',
    clicks: 700,
    impressions: 20000,
    ctr: 3.5,
  },
  {
    adSetName: 'Black Friday - General Audience',
    campaignName: 'Black Friday Bonanza',
    targetAudience: 'Men and Women, 18-60, All Interests',
    dailyBudget: 2000,
    platform: 'Google Ads',
    clicks: 4000,
    impressions: 200000,
    ctr: 2.0,
  },
  {
    adSetName: 'Holiday Sale - Travelers',
    campaignName: 'Holiday Sale 2024',
    targetAudience: 'Men and Women, 25-45, Travel Enthusiasts',
    dailyBudget: 1000,
    platform: 'Instagram',
    clicks: 2000,
    impressions: 100000,
    ctr: 2.0,
  },
  {
    adSetName: 'School Promo - Parents',
    campaignName: 'Back to School Special',
    targetAudience: 'Parents, 30-50, Interests: Education',
    dailyBudget: 300,
    platform: 'Facebook',
    clicks: 500,
    impressions: 15000,
    ctr: 3.3,
  },
  {
    adSetName: 'Fitness - Gym Members',
    campaignName: 'Fitness Frenzy',
    targetAudience: 'Men and Women, 20-40, Fitness Enthusiasts',
    dailyBudget: 450,
    platform: 'TikTok',
    clicks: 900,
    impressions: 30000,
    ctr: 3.0,
  },
  {
    adSetName: 'Luxury Watches - High Income',
    campaignName: 'Luxury Watches Promo',
    targetAudience: 'Men, 30-50, High Income, Interests: Watches',
    dailyBudget: 1200,
    platform: 'Google Ads',
    clicks: 2000,
    impressions: 60000,
    ctr: 3.3,
  },
  {
    adSetName: 'Eco-Friendly - Millennials',
    campaignName: 'Eco-Friendly Initiative',
    targetAudience: 'Men and Women, 25-40, Interests: Sustainability',
    dailyBudget: 600,
    platform: 'Instagram',
    clicks: 700,
    impressions: 25000,
    ctr: 2.8,
  },
  {
    adSetName: 'Gourmet Food - Urban Foodies',
    campaignName: 'Gourmet Food Ads',
    targetAudience: 'Urban, 25-45, Interests: Food',
    dailyBudget: 700,
    platform: 'Facebook',
    clicks: 900,
    impressions: 28000,
    ctr: 3.2,
  },
  {
    adSetName: 'Travel - Adventure Seekers',
    campaignName: 'Travel Dreams Campaign',
    targetAudience: 'Men and Women, 20-35, Interests: Adventure',
    dailyBudget: 1200,
    platform: 'Google Ads',
    clicks: 1500,
    impressions: 50000,
    ctr: 3.0,
  },
  {
    adSetName: 'Music Mania - Concert Goers',
    campaignName: 'Music Mania',
    targetAudience: 'Men and Women, 18-30, Interests: Music',
    dailyBudget: 500,
    platform: 'TikTok',
    clicks: 600,
    impressions: 20000,
    ctr: 3.0,
  },
  {
    adSetName: 'Cars Showcase - Luxury Buyers',
    campaignName: 'Luxury Cars Showcase',
    targetAudience: 'Men and Women, 35-60, Interests: Luxury Cars',
    dailyBudget: 1500,
    platform: 'Instagram',
    clicks: 1000,
    impressions: 50000,
    ctr: 2.0,
  },
  {
    adSetName: 'Healthy Living - Suburban Moms',
    campaignName: 'Healthy Living Promo',
    targetAudience: 'Women, 30-50, Interests: Healthy Living',
    dailyBudget: 350,
    platform: 'Facebook',
    clicks: 400,
    impressions: 12000,
    ctr: 3.3,
  },
  {
    adSetName: 'Smart Home - Tech Savvy',
    campaignName: 'Smart Home Solutions',
    targetAudience: 'Men and Women, 25-45, Interests: Smart Home Tech',
    dailyBudget: 800,
    platform: 'Google Ads',
    clicks: 1200,
    impressions: 40000,
    ctr: 3.0,
  },
  {
    adSetName: 'Books - Avid Readers',
    campaignName: "Bookworm's Paradise",
    targetAudience: 'Men and Women, 18-50, Interests: Books',
    dailyBudget: 300,
    platform: 'TikTok',
    clicks: 500,
    impressions: 18000,
    ctr: 2.8,
  },
  {
    adSetName: 'Gaming Gear - Gamers',
    campaignName: 'Gaming Gear Galore',
    targetAudience: 'Men, 18-35, Interests: Gaming',
    dailyBudget: 600,
    platform: 'Instagram',
    clicks: 900,
    impressions: 25000,
    ctr: 3.6,
  },
];

export interface Campaign {
  campaignName: string;
  startDate: string;
  endDate: string;
  budget: number;
  platform: string;
  clicks: number;
  impressions: number;
  conversionRate: number;
}

export const CAMPAIGN_DATA: Campaign[] = [
  {
    campaignName: 'Summer Splash Sale',
    startDate: '2024-01-01',
    endDate: '2024-01-15',
    budget: 5000,
    platform: 'Facebook',
    clicks: 1200,
    impressions: 45000,
    conversionRate: 3.5,
  },
  {
    campaignName: 'Winter Clearance',
    startDate: '2024-01-05',
    endDate: '2024-01-20',
    budget: 4000,
    platform: 'Google Ads',
    clicks: 950,
    impressions: 38000,
    conversionRate: 4.0,
  },
  {
    campaignName: 'Tech Trends Launch',
    startDate: '2024-02-01',
    endDate: '2024-02-10',
    budget: 6500,
    platform: 'Instagram',
    clicks: 1500,
    impressions: 55000,
    conversionRate: 2.7,
  },
  {
    campaignName: 'Spring Collection Promo',
    startDate: '2024-03-01',
    endDate: '2024-03-31',
    budget: 8000,
    platform: 'TikTok',
    clicks: 2300,
    impressions: 80000,
    conversionRate: 2.8,
  },
  {
    campaignName: 'New Arrivals Campaign',
    startDate: '2024-02-15',
    endDate: '2024-03-01',
    budget: 7000,
    platform: 'Facebook',
    clicks: 1700,
    impressions: 62000,
    conversionRate: 3.2,
  },
  {
    campaignName: 'Black Friday Bonanza',
    startDate: '2024-11-20',
    endDate: '2024-11-30',
    budget: 15000,
    platform: 'Google Ads',
    clicks: 5200,
    impressions: 250000,
    conversionRate: 2.1,
  },
  {
    campaignName: 'Holiday Sale 2024',
    startDate: '2024-12-01',
    endDate: '2024-12-24',
    budget: 20000,
    platform: 'Instagram',
    clicks: 6000,
    impressions: 320000,
    conversionRate: 1.8,
  },
  {
    campaignName: 'Back to School Special',
    startDate: '2024-08-01',
    endDate: '2024-08-15',
    budget: 5000,
    platform: 'Facebook',
    clicks: 1100,
    impressions: 46000,
    conversionRate: 3.1,
  },
  {
    campaignName: 'Fitness Frenzy',
    startDate: '2024-01-10',
    endDate: '2024-01-31',
    budget: 4500,
    platform: 'TikTok',
    clicks: 1800,
    impressions: 75000,
    conversionRate: 2.4,
  },
  {
    campaignName: 'Luxury Watches Promo',
    startDate: '2024-05-01',
    endDate: '2024-05-31',
    budget: 12000,
    platform: 'Google Ads',
    clicks: 4000,
    impressions: 140000,
    conversionRate: 2.9,
  },
  {
    campaignName: 'Eco-Friendly Initiative',
    startDate: '2024-06-15',
    endDate: '2024-07-15',
    budget: 7500,
    platform: 'Instagram',
    clicks: 2000,
    impressions: 90000,
    conversionRate: 2.2,
  },
  {
    campaignName: 'Gourmet Food Ads',
    startDate: '2024-09-01',
    endDate: '2024-09-30',
    budget: 9000,
    platform: 'Facebook',
    clicks: 2400,
    impressions: 98000,
    conversionRate: 2.4,
  },
  {
    campaignName: 'Travel Dreams Campaign',
    startDate: '2024-07-01',
    endDate: '2024-07-31',
    budget: 10000,
    platform: 'Google Ads',
    clicks: 3000,
    impressions: 150000,
    conversionRate: 2.0,
  },
  {
    campaignName: 'Music Mania',
    startDate: '2024-04-01',
    endDate: '2024-04-15',
    budget: 6000,
    platform: 'TikTok',
    clicks: 1700,
    impressions: 70000,
    conversionRate: 2.5,
  },
  {
    campaignName: 'Luxury Cars Showcase',
    startDate: '2024-05-10',
    endDate: '2024-05-20',
    budget: 20000,
    platform: 'Instagram',
    clicks: 5500,
    impressions: 250000,
    conversionRate: 2.2,
  },
  {
    campaignName: 'Healthy Living Promo',
    startDate: '2024-03-15',
    endDate: '2024-03-31',
    budget: 4000,
    platform: 'Facebook',
    clicks: 900,
    impressions: 40000,
    conversionRate: 3.0,
  },
  {
    campaignName: 'Smart Home Solutions',
    startDate: '2024-06-01',
    endDate: '2024-06-30',
    budget: 10000,
    platform: 'Google Ads',
    clicks: 2800,
    impressions: 120000,
    conversionRate: 2.3,
  },
  {
    campaignName: "Bookworm's Paradise",
    startDate: '2024-09-15',
    endDate: '2024-09-30',
    budget: 3000,
    platform: 'TikTok',
    clicks: 1500,
    impressions: 60000,
    conversionRate: 2.5,
  },
  {
    campaignName: 'Gaming Gear Galore',
    startDate: '2024-08-15',
    endDate: '2024-08-30',
    budget: 8000,
    platform: 'Instagram',
    clicks: 3200,
    impressions: 110000,
    conversionRate: 2.9,
  },
  {
    campaignName: 'Pet Supplies Promo',
    startDate: '2024-02-20',
    endDate: '2024-03-05',
    budget: 4500,
    platform: 'Facebook',
    clicks: 1400,
    impressions: 54000,
    conversionRate: 3.4,
  },
];

function generateImpressionsOverTimeChartFromCampaigns(campaigns: Campaign[]): EChartsCoreOption[] {
  return campaigns.map(campaign => {
    const startDate = new Date(campaign.startDate);
    const endDate = new Date(campaign.endDate);
    const days = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1; // Inclusive of start and end
    const baseDailyImpressions = Math.floor(campaign.impressions / days);
    let remainingImpressions = campaign.impressions;
    const seriesData = [];

    for (let i = 0; i < days; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(currentDate.getDate() + i);

      // Generate a random factor between -10% and +10%
      const variation = Math.random() * 0.2 - 0.1;
      const dailyImpressions = Math.floor(baseDailyImpressions * (1 + variation));

      // Ensure we don't exceed or fall short of the total impressions
      if (i === days - 1) {
        // Assign remaining impressions to the last day
        seriesData.push({
          value: remainingImpressions,
          date: currentDate.toISOString().split('T')[0],
        });
      } else {
        seriesData.push({
          value: dailyImpressions,
          date: currentDate.toISOString().split('T')[0],
        });
        remainingImpressions -= dailyImpressions;
      }
    }

    return {
      title: {
        text: 'Impressions Over Time',
        subtext: 'Fake Data',
        left: 'center',
      },
      xAxis: {
        type: 'category',
        data: seriesData.map(s => s.date),
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: seriesData.map(s => s.value),
          type: 'line',
          smooth: true,
        },
      ],
    };
  });
}

export const CAMPAIGN_IMPRESSION_OVER_TIME_DATA = generateImpressionsOverTimeChartFromCampaigns(CAMPAIGN_DATA);

function generateGenderDistributionFromCampaigns(campaigns: Campaign[]): EChartsCoreOption[] {
  return campaigns.map(campaign => {
    const random = randomNumbers(1, 3, 5)[0];
    const delta = (Math.random() < 0.5 ? 1 : -1) * Math.floor(campaign.impressions / random);

    return {
      title: {
        text: 'Gender Distribution',
        subtext: 'Fake Data',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: Math.abs(campaign.impressions / 2 + delta), name: 'Male' },
            { value: Math.abs(campaign.impressions / 2 - delta), name: 'Female' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };
  });
}

export const GENDER_DISTRIBUTION_DATA = generateGenderDistributionFromCampaigns(CAMPAIGN_DATA);

function generateAgeDistributionFromCampaigns(campaigns: Campaign[]): EChartsCoreOption[] {
  return campaigns.map(campaign => {
    return {
      title: {
        text: 'Age Distribution By Weekday',
        subtext: 'Fake Data',
        left: 'center',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // Use axis to trigger tooltip
          type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
        },
      },
      legend: {
        show: false,
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'value',
      },
      yAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      series: [
        {
          name: '-18',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
          },
          emphasis: {
            focus: 'series',
          },
          data: randomNumbers(7, 300, 900),
        },
        {
          name: '18 - 25',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
          },
          emphasis: {
            focus: 'series',
          },
          data: randomNumbers(7, 300, 900),
        },
        {
          name: '25 - 30',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
          },
          emphasis: {
            focus: 'series',
          },
          data: randomNumbers(7, 300, 900),
        },
        {
          name: '30 - 45',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
          },
          emphasis: {
            focus: 'series',
          },
          data: randomNumbers(7, 300, 900),
        },
        {
          name: '45 - 60',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
          },
          emphasis: {
            focus: 'series',
          },
          data: randomNumbers(7, 300, 900),
        },
        {
          name: '60 - 80',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
          },
          emphasis: {
            focus: 'series',
          },
          data: randomNumbers(7, 300, 900),
        },
        {
          name: '80 +',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
          },
          emphasis: {
            focus: 'series',
          },
          data: randomNumbers(7, 300, 900),
        },
      ],
    };
  });
}

export const AGE_DISTRIBUTION_DATA = generateAgeDistributionFromCampaigns(CAMPAIGN_DATA);

const countryColors = {
  'Australia 🇦🇺': '#00008b',
  'Canada 🇨🇦': '#f00',
  'Cuba 🇨🇺': '#002a8f',
  'Finland 🇫🇮': '#003580',
  'France 🇫🇷': '#ed2939',
  'Germany 🇩🇪': '#000',
  'Iceland 🇮🇸': '#003897',
  'India 🇮🇳': '#f93',
  'Japan 🇯🇵': '#bc002d',
  'South Korea 🇰🇷': '#000',
  'New Zealand 🇳🇿': '#00247d',
  'Norway 🇳🇴': '#ef2b2d',
  'Poland 🇵🇱': '#dc143c',
  'Turkey 🇹🇲': '#e30a17',
  'United Kingdom 🇬🇧': '#00247d',
  'United States 🇺🇸': '#b22234',
};

function generateCountriesRace(campaigns: Campaign[]): EChartsCoreOption[] {
  const option: EChartsCoreOption = {
    title: {
      text: 'Country Distribution',
      subtext: 'Fake Data',
      left: 'center',
    },
    grid: {
      top: 60,
      bottom: 30,
      left: 150,
      right: 80,
    },
    xAxis: {
      max: 'dataMax',
      axisLabel: {},
    },
    dataset: {
      source: [
        [7418, 44.63431373, 3088808, 'Australia', 1890],
        [3963, 45.12972, 4908078, 'Canada', 1890],
        [2454, 39.54, 1658274, 'Cuba', 1890],
        [2305, 44.61, 2358344, 'Finland', 1890],
        [3639, 43.36, 40015501, 'France', 1890],
        [3733, 40.91, 48211294, 'Germany', 1890],
        [2009, 36.58, 96517, 'Iceland', 1890],
        [1163, 24.384, 232819584, 'India', 1890],
        [1606, 37.67568, 39878734, 'Japan', 1890],
        [526, 25.8, 9856047, 'South Korea', 1890],
        [6265, 42.97564103, 669985, 'New Zealand', 1890],
        [3251, 48.6, 2003954, 'Norway', 1890],
        [2156, 37.41086957, 22618933, 'Poland', 1890],
        [1838, 35, 13188522, 'Turkey', 1890],
        [7169, 44.75, 34215580, 'United Kingdom', 1890],
        [5646, 45.21, 63810074, 'United States', 1890],
      ],
    },
    yAxis: {
      type: 'category',
      inverse: true,
      max: 10,
      axisLabel: {
        show: true,
        fontSize: 14,
        rich: {
          flag: {
            fontSize: 25,
            padding: 5,
          },
        },
      },
      animationDuration: 300,
      animationDurationUpdate: 300,
    },
    series: [
      {
        realtimeSort: true,
        seriesLayoutBy: 'column',
        type: 'bar',
        itemStyle: {
          color: function (param: { value: (keyof typeof countryColors)[] }) {
            console.log(param.value[3], countryColors[param.value[3]]);
            return countryColors[param.value[3]] || '#5470c6';
          },
        },
        encode: {
          x: 0,
          y: 3,
        },
        label: {
          show: true,
          precision: 1,
          position: 'right',
          valueAnimation: true,
          fontFamily: 'monospace',
        },
        data: [
          [13082, 70.303, 9212824, 'Australia 🇦🇺', 2024],
          [13513, 70.015, 15733858, 'Canada 🇨🇦', 2024],
          [8757, 62.7523, 6539470, 'Cuba 🇨🇺', 2024],
          [8802, 67.258, 4235423, 'Finland 🇫🇮', 2024],
          [9453, 68.708, 43528065, 'France 🇫🇷', 2024],
          [10998, 68.4080901, 71313740, 'Germany 🇩🇪', 2024],
          [10548, 73.293, 157584, 'Iceland 🇮🇸', 2024],
          [963, 37.6538, 409280196, 'India 🇮🇳', 2024],
          [3464, 65.861, 88389994, 'Japan 🇯🇵', 2024],
          [1139, 49.9673, 21168611, 'South Korea 🇰🇷', 2024],
          [14883, 70.599, 2136000, 'New Zealand 🇳🇿', 2024],
          [13438, 73.314, 3429431, 'Norway 🇳🇴', 2024],
          [5386, 63.939, 27269745, 'Poland 🇵🇱', 2024],
          [4156, 44.9343, 24253200, 'Turkey 🇹🇲', 2024],
          [12531, 70.07, 51113711, 'United Kingdom 🇬🇧', 2024],
          [17409, 69.476, 170796378, 'United States 🇺🇸', 2024],
        ],
      },
    ],
    animationDuration: 0,
    animationDurationUpdate: 2000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear',
    graphic: {
      elements: [
        {
          type: 'text',
          right: 160,
          bottom: 60,
          style: {
            text: 2024,
            font: 'bolder 80px monospace',
            fill: 'rgba(100, 100, 100, 0.25)',
          },
          z: 100,
        },
      ],
    },
  };
  return [option];
}

export const COUNTRY_DISTRIBUTION_DATA = generateCountriesRace(CAMPAIGN_DATA);

function randomNumbers(length: number, lowerLimit: number, higherLimit: number) {
  return Array.from({ length }, () => Math.floor(Math.random() * (higherLimit - lowerLimit + 1)) + lowerLimit);
}
