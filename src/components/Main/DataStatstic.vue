<script setup>
import { ref } from 'vue'
import { useTransition } from '@vueuse/core'
import { CaretBottom, CaretTop, Warning } from "@element-plus/icons-vue";

const source1 = ref(0)
const source2 = ref(0)
const source3 = ref(0)
const outputValue1 = useTransition(source1, {
  duration: 1750,
})
const outputValue2 = useTransition(source2, {
  duration: 1950,
})
const outputValue3 = useTransition(source3, {
  duration: 2000,
})
source1.value = 3610
source2.value = 3057
source3.value = 23
</script>
<template>
  <div class="Data-container">
    <div class="statistic-title">非遗数据统计</div>
    <div class="statistic-content">
      <el-row :gutter="16">
        <el-col :span="8">
          <div class="statistic-card">
            <el-statistic :value="outputValue1">
              <template #title>
                <div style="display: inline-flex; align-items: center; font-size: 18px;">
                  国家级代表项目
                  <el-tooltip effect="dark" content="数据截止到2011年第三次申报期" placement="top">
                    <el-icon style="margin-left: 4px" :size="12">
                      <Warning />
                    </el-icon>
                  </el-tooltip>
                </div>
              </template>
            </el-statistic>
            <div class="statistic-footer">
              <div class="footer-item">
                <span>较上次申报期</span>
                <span class="green">
                  12%
                  <el-icon>
                    <CaretTop />
                  </el-icon>
                </span>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="statistic-card">
            <el-statistic :value="outputValue2">
              <template #title>
                <div style="display: inline-flex; align-items: center; font-size: 18px;width: 180px">
                  国家级代表性传承人
                  <el-tooltip effect="dark" content="数据截止到2011年第三次申报期" placement="top">
                    <el-icon style="margin-left: 4px" :size="12">
                      <Warning />
                    </el-icon>
                  </el-tooltip>
                </div>
              </template>
            </el-statistic>
            <div class="statistic-footer">
              <div class="footer-item">
                <span>较上次申报期</span>
                <span class="green">
                  8%
                  <el-icon>
                    <CaretTop />
                  </el-icon>
                </span>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="statistic-card">
            <el-statistic :value="outputValue3">
              <template #title>
                <div style="display: inline-flex; align-items: center; font-size: 18px;width: 200px">
                  国家级文化生态保护区
                  <el-tooltip effect="dark" content="数据截止到2011年第三次申报期" placement="top">
                    <el-icon style="margin-left: 4px" :size="12">
                      <Warning />
                    </el-icon>
                  </el-tooltip>
                </div>
              </template>
            </el-statistic>
            <div class="statistic-footer">
              <div class="footer-item">
                <span>较上次申报期</span>
                <span class="green">
                  6.9%
                  <el-icon>
                    <CaretTop />
                  </el-icon>
                </span>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<style scoped>
.Data-container {
  background-color: #151515;
  width: 1707.32px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.statistic-title {
  height: auto;
  width: 600px;
  font-size: 50px;
  font-weight: 700;
  letter-spacing: 6px;
  text-align: center;
  color: white;
}

:global(h2#card-usage ~ .example .example-showcase) {
  background-color: var(--el-fill-color) !important;
}

.el-statistic {
  --el-statistic-content-font-size: 45px;
  --el-statistic-content-color: white;
  --el-statistic-title-font-size: 20px;
}

.statistic-card {
  height: 100%;
  padding: 105px;
}

.statistic-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  color: var(--el-text-color-regular);
  margin-top: 16px;
}

.statistic-footer .footer-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.statistic-footer .footer-item span:last-child {
  display: inline-flex;
  align-items: center;
  margin-left: 4px;
}

.green {
  color: var(--el-color-success);
}

.red {
  color: var(--el-color-error);
}
</style>