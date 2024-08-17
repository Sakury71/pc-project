<script setup>
import Header from '@/components/Header/Header.vue'
import Footer from "@/components/Footer/Footer.vue";
import { MoreFilled } from '@element-plus/icons-vue'

const activities = [
  {
    content: '团队正式启动',
    timestamp: '2024-07-01 6:00',
    size: 'large',
    type: 'primary',
    icon: MoreFilled,
  },
  {
    content: '完成了对网络问卷的调研',
    timestamp: '2024-07-25 12:00',
    color: '#0bbd87',
  },
  {
    content: '初步完成了对“时创”平台的搭建',
    timestamp: '2024-08-01 10:00',
    size: 'large',
  },
  {
    content: '完成了对非遗数据库的采集与上传',
    timestamp: '2024-08-09 15:00',
    type: 'primary',
    hollow: true,
  },
  {
    content: '后续竞赛所需材料的准备',
    timestamp: '2024-08-15 18:00',
  },
]
</script>
<template>
  <div class="about-container">
    <!-- 页面导航条 -->
    <div>
      <Header></Header>
    </div>
    <!-- 页面内容 -->
    <!-- #1A1E27 -->
    <div class="about-content">
      <div style="margin-top: 100px;">
        <el-timeline style="max-width: 600px;">
          <el-timeline-item v-for="(activity, index) in activities" :key="index" :icon="activity.icon"
            :type="activity.type" :color="activity.color" :size="activity.size" :hollow="activity.hollow"
            :timestamp="activity.timestamp">
            {{ activity.content }}
          </el-timeline-item>
        </el-timeline>
      </div>
      <div class="about-content-center">
        <h2 class="text-start">团队成员</h2>
        <div class="card-box">
          <div class="speaker-card">
            <div class="avatar">
              <el-image style="width: 220px; height: 220px;border-radius: 10px;margin-top: 30px;"
                src="src/assets/img/p1.jpg" :fit="fit" />
            </div>
            <div class="speaker-info">
              <div class="speaker-info-name">
                <span>李树青</span>
                <span style="font-size: 20px;font-weight: 500;color: azure;width: auto;height: auto;">指导老师</span>
              </div>
              <div class="speaker-info-detail">
                <p> 李树青，南京财经大学信息工程学院副院长，江苏省科学技术情报学会理事， 美国纽约州立大学布法罗大学访问学者，国家自科基金委评审专家。

                  在科研上，主持国家社科重大项目子课题1项，国家社科基金面上项目1项， 主持和参与国家自科基金2项、省教育厅自然科学重点课题1项、省教育厅一
                  般课题3项。目前发表专业核心论文50余篇，出版学术专著和图书6部，长期 从事个性化服务、大数据管理和推荐系统等研究。

                  在教学上，完成多本省级重点建设教材、多门省级一流线上课程、多项省级 教育教改课题。主要承担公共基础课《Python大数据分析》、公共选修课《文
                  献与信息检索》、通识选修课《互联网创新创业》、专业课《学科导论》、研 究生《推荐系统》等课程的教学，指导获得优秀毕业设计多项。</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card-box">
          <div class="speaker-card">
            <div class="avatar">
              <el-image style="width: 220px; height: 220px;border-radius: 10px;margin-top: 30px;"
                src="src/assets/img/p2.webp" :fit="fit" />
            </div>
            <div class="speaker-info">
              <div class="speaker-info-name">
                <span>龙俊豪</span>
                <span style="font-size: 20px;font-weight: 500;color: azure;width: auto;height: auto;">团队队长</span>
              </div>
              <div class="speaker-info-detail">
                <p>分团委组织部部长，2023年度分团委优秀部长，优秀共青团干部。
                  多次参与志愿实践活动，曾获“中国航天，与你同行”志愿活动优先奖，主要负责统筹策划，文字撰写，ppt制作以及答辩工作。
                  南京财经大学2024年“挑战杯”中国大学生创业计划竞赛“智库成就，青石引领”项目院赛中荣获一等奖
                  南京财经大学2023年大学生创新创业大赛“基于机器学习的社交媒体虚假健康信息识别方法研究”负责人</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card-box">
          <div class="speaker-card">
            <div class="avatar">
              <el-image style="width: 220px; height: 220px;border-radius: 10px;margin-top: 30px;"
                src="src/assets/img/p2.webp" :fit="fit" />
            </div>
            <div class="speaker-info">
              <div class="speaker-info-name">
                <span>韩逸峰</span>
                <span style="font-size: 20px;font-weight: 500;color: azure;width: auto;height: auto;">团队成员</span>
              </div>
              <div class="speaker-info-detail">
                <p>
                  熟练运用c语言、了解并运用python、Java、web前端技术开发等相关计算机技能。现任信息工程学院分团委志愿服务部部长，大一学年获评分团委优秀部员，校“杰出青年志愿者”、曾获得素质拓展奖学金，主要负责调研报告撰写、协调规划项目组织等工作。
                  2023年全国大中专学生志愿者暑期文化科技卫生“三下乡”社会实践
                  《“拨云见皖山，执手共筑梦”暑期淮北支教实践调研》任通讯员，团队获评院优秀实践团队，本人获评优秀通讯员，先进个人等奖项。</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card-box">
          <div class="speaker-card">
            <div class="avatar">
              <el-image style="width: 220px; height: 220px;border-radius: 10px;margin-top: 30px;"
                src="src/assets/img/p2.webp" :fit="fit" />
            </div>
            <div class="speaker-info">
              <div class="speaker-info-name">
                <span>陈佳铭</span>
                <span style="font-size: 20px;font-weight: 500;color: azure;width: auto;height: auto;">团队成员</span>
              </div>
              <div class="speaker-info-detail">
                <p>
                  较熟练运用Java，了解并运用Python、C语言、Web前端等语言。了解Java集合框架、网络编程。同时基本掌握数据库管理与应用、数据结构与算法等专业知识技能。担任计算机2201班团支书，多次荣获学习优秀奖学金，主要负责后端框架开发，协助前端开发。2024年“挑战杯”南京财经大学大学生创业计划竞赛校级二等奖：“数字智造”——数字孪生透明工厂解决方案引导者，参与者，负责相关技术方面的解答。
                  2023年“挑战杯”全国大学生课外学术科技作品竞赛红色专项校级三等奖：继新四足迹：探寻新时代红色革命道路的传承与信息数字化发展，参与者，负责调研报告的写作。</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card-box">
          <div class="speaker-card">
            <div class="avatar">
              <el-image style="width: 220px; height: 220px;border-radius: 10px;margin-top: 30px;"
                src="src/assets/img/user.jpg" :fit="fit" />
            </div>
            <div class="speaker-info">
              <div class="speaker-info-name">
                <span>张帅</span>
                <span style="font-size: 20px;font-weight: 500;color: azure;width: auto;height: auto;">技术负责人</span>
              </div>
              <div class="speaker-info-detail">
                <p>
                  熟练掌握并运用Java、Python、数据库管理与应用、数据结构与算法等专业知识技能。掌握HTML5、CSS3、JavaScript、Vue3等前端开发技术，了解Springboot、Django等Web开发技术。分团委宣传部部长，多次荣获学习优秀奖学金和素质拓展奖学金，获评南京财经大学2023年度“优秀青年志愿者”。
                  具有暑期社会实践，“挑战杯”全国大学生课外学术科技作品竞赛，“互联网+”经验，主要研究Web网页前端搭建等方向，多次荣获校级和省级立项。
                  2024年江苏省“互联网+”创新创业竞赛
                  技术负责人灵眸智造——数字孪生透明工厂解决方案引导者团队参与人，荣获江苏省三等奖
                  2023年“挑战杯”大学生课外学术科技作品竞赛红色专项
                  报告撰写者《“足”遍江苏，“信”传红色——新四军精神在江苏地方的普及程度及数字化资源建设水平调研》荣获校赛三等奖
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card-box">
          <div class="speaker-card">
            <div class="avatar">
              <el-image style="width: 220px; height: 220px;border-radius: 10px;margin-top: 30px;"
                src="src/assets/img/p2.webp" :fit="fit" />
            </div>
            <div class="speaker-info">
              <div class="speaker-info-name">
                <span>李彤彤</span>
                <span style="font-size: 20px;font-weight: 500;color: azure;width: auto;height: auto;">团队成员</span>
              </div>
              <div class="speaker-info-detail">
                <p>
                  了解并会使用C语言,Java，Python等编程语言，掌握HTML、CSS等前端知识。
                  2024年入党积极分子，优秀共青团员，多次参加志愿活动，曾获得中优关爱儿童之家的荣誉证书；入围中国大学生预见未来行研大赛；
                  熟练使用Office办公软件并用Excel进行数据分析。获得学习优秀二等奖学金，在队内辅助完成各项任务的分工合作,提高团队效率。

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="show-box"></div>
    </div>
    <!-- 页脚 -->
    <div id="sticky-footer">
      <Footer style="background-color: #111418;"></Footer>
    </div>
    <el-backtop :right="100" :bottom="100" />
  </div>
</template>
<style scoped>
.about-container {
  display: flex;
  flex-direction: column;
  background-color: #111418;
  height: auto;
}

#sticky-footer {
  padding: absolute;
  bottom: 0;
  width: 100%;
}

.about-content {
  margin-top: 58px;
  height: 2500px;
  display: flex;
  justify-content: space-between;
}

.about-content-center {
  display: flex;
  flex-direction: column;
  margin-right: 60px;
  align-items: center;
}

.text-start {
  display: block;
  height: auto;
  width: auto;
  font-family: 微软雅黑, serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 55.2px;
  letter-spacing: 5px;
  text-align: center;
  text-shadow: rgba(255, 255, 255, 0.25) 0 0 30px;
  text-size-adjust: 100%;
  color: rgb(255, 255, 255);
  cursor: default;
  margin-top: 25px;
  margin-bottom: 25px;
}

.card-box {
  display: flex;
  width: 900px;
  height: 355px;
  background-color: #1A1E27;
  margin: 25px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
}

.speaker-card {
  width: 900px;
  display: flex;
  align-items: flex-start;
  padding: 32px;
  outline-style: solid;
  outline-color: #1A1E27;
  outline-width: 2px;
}

.avatar {
  width: 220px;
  height: 220px;
}

.speaker-info {
  display: flex;
  flex-direction: column;
  margin-left: 40px;
}

.speaker-info-name {
  display: flex;
  flex-direction: column;
  font-size: 36px;
  font-weight: 700;
  line-height: 55.2px;
  letter-spacing: 5px;
  text-align: left;
  text-shadow: rgba(255, 255, 255, 0.25) 0 0 30px;
  color: rgb(255, 255, 255);
}

.speaker-info-detail {
  font-size: 14.5px;
  font-weight: 400;
  line-height: 24px;
  color: rgb(148, 153, 160);

}
</style>