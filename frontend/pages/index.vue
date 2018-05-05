<template>
  <el-main>
      <form action="" v-show="!loading">
          <el-row justify="center" type="flex" :gutter="25">
              <p></p>
              <el-col :span="5">
                  <el-select v-model="cityFrom"
                             v-validate="'required'"
                             filterable
                             data-vv-name="cityFrom"
                             :placeholder="$t('translation.cityFrom')">
                      <el-option
                              v-for="item in city"
                              :key="item.id"
                              :label="item.label"
                              :value="item.id">
                      </el-option>
                  </el-select>
              </el-col>
              <el-col :span="5">
                  <el-select v-model="cityTo"
                             filterable
                             name="cityTo"
                             :placeholder="$t('translation.cityTo')">
                      <el-option
                              v-for="item in city"
                              :key="item.id"
                              :label="item.label"
                              :value="item.id">
                      </el-option>
                  </el-select>
              </el-col>
          </el-row>
          <el-row justify="center" type="flex" :gutter="25">
              <el-col :span="5">
                  <el-date-picker
                          v-model="dateFrom"
                          v-validate="'required|date_format:DD/MM/YYYY|before:dateTo'"
                          type="date"
                          data-vv-name="dateFrom"
                          name="dateFrom"
                          :placeholder="$t('translation.pickTimeFrom')">
                  </el-date-picker>
              </el-col>
              <el-col :span="5">
                  <el-date-picker
                          v-model="dateTo"
                          v-validate="'required|date_format:DD/MM/YYYY|after:dateFrom'"
                          data-vv-name="dateTo"
                          name="dateTo"
                          type="date"
                          :placeholder="$t('translation.pickTimeTo')">
                  </el-date-picker>
              </el-col>
          </el-row>
          <el-row justify="center" type="flex">
              <el-button type="success"
                         round
                         @click="getRoute">
                  {{ $t('translation.getRoute') }}
              </el-button>
          </el-row>
      </form>
  </el-main>
</template>

<script>
import axios from 'axios';

export default {
    data: () => ({
        dateFrom: null,
        dateTo: null,
        cityFrom: '',
        cityTo: '',
        loading: false,
    }),
    asyncData: async () => {
        this.loading = true;
        const city = await axios.get('http://46.101.97.201/api/v1/stations/all');
        this.loading = false;
        return { city: city.data };
    },
    methods: {
        async getRoute () {
            const isValid = await this.$validator.validateAll();
            console.log(this.errors);
            if (isValid) {
                console.log(2);
            }
        }
    },
    computed: {
    }
}
</script>

