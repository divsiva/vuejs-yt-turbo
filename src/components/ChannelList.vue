<script>
import Multiselect from 'vue-multiselect'

export default {
  components: { Multiselect },
  data() {
    return {
      category: this.$route.params.id,
      selectedCategory: [],
      selectedChannelName: '',
      addClicked: false,
      channelListArray: {
        Food: [
          { name: "Food channel1" },
          { name: "Food channel2" },
          { name: "Food channel3" },
          { name: "Food channel3" }
        ],
        Travel: [
          { name: "Travel channel1" },
          { name: "Travel channel2" },
          { name: "Travel channel3" },
          { name: "Travel channel3" }
        ],
        Art: [
          { name: "Art channel1" },
          { name: "Art channel2" },
          { name: "Art channel3" },
          { name: "Art channel3" }
        ],
        Entertainment: [
          { name: "Entertainment channel1" },
          { name: "Entertainment channel2" },
          { name: "Entertainment channel3" },
          { name: "Entertainment channel3" }
        ],
        Courses: [
          { name: "Courses channel1" },
          { name: "Courses channel2" },
          { name: "Courses channel3" },
          { name: "Courses channel3" }
        ],
        Tutorial: [
          { name: "Tutorial channel1" },
          { name: "Tutorial channel2" },
          { name: "Tutorial channel3" },
          { name: "Tutorial channel3" }
        ],
        Spiritual: [
          { name: "Spiritual channel1" },
          { name: "Spiritual channel2" },
          { name: "Spiritual channel3" },
          { name: "Spiritual channel3" }
        ],      },
      value: [],
      options: [
        { name: 'Food' },
        { name: 'Travel' },
        { name: 'Art' },
        { name: 'Entertainment' },
        { name: 'Courses' },
        { name: 'Tutorial' },
        { name: 'Spiritual' },
      ]

    }
  },
  methods: {

    optionSelected(value, id) {
      console.log(value.name)
      /* can use a comma with console log for multiple values*/
      /* No need for  console.log(' >> '+ `${value}` ) */
      console.log(' >> ', value);
      this.selectedCategory.push(value.name)
    },
    closeSelect() {
      console.log(close, 'close');
      this.addClicked = false;
      for (let category in this.channelListArray) {
        console.log(category, this.channelListArray[category], 'category')
        for (let selectedOption of this.selectedCategory) {
          if (selectedOption == category) {
            this.channelListArray[category].push({ name: this.selectedChannelName });
          }
        }
      }
      this.selectedChannelName = '';
      this.value = '';

      console.log(this.channelListArray, 'channel lust')

    },
    openSelect() {
      console.log(open, 'open')

    },
    addCategory(event) {
      this.addClicked = true;
    }
  }
}
</script>

<template>









  <div class="channel-cont">
    <div class="grid gap-6 mb-6 md:grid-cols-4">
      <div class="col-span-2">
        <input type="text" id="first_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="please enter the channel url" required v-model="selectedChannelName">

      </div>
      <div class="col-span-2">
        <button class="btn" @click="addCategory">
          Add Category
        </button>
      </div>
      <div class="col-span-2">
        <multiselect v-if="addClicked" v-model="value" :options="options" :multiple="true" :close-on-select="false"
          :clear-on-select="true" placeholder="Select Category" label="name" track-by="name" :preselect-first="false"
          :preserveSearch="false" :taggable="false" @select="optionSelected" @close="closeSelect" @open="openSelect"
          @resetAfter="true">
          <template slot="tag">{{ '' }}</template>
        </multiselect>
        <div>




        </div>
      </div>
    </div>
    <h1 class="category-name">{{ $route.params.id }}</h1>
    <div v-for="(value, propertyName) in channelListArray" class="m-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4"
      v-if="$route.params.id == 'All'">
      <div v-for="categoryDetails in value">
        <div class="cat-details">{{ categoryDetails.name }}</div>
      </div>

    </div>
    <div class="m-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4" v-if="$route.params.id != 'All'">
      <div v-for="categoryName in channelListArray[$route.params.id]">
        <div class="cat-details">{{ categoryName.name }}</div>
      </div>
    </div>
  </div>



</template>
<style src="vue-multiselect/dist/vue-multiselect.css">

</style>

<style scoped>
.cat-details {
  padding: 50px;
  margin: 10px;
  border: 1px solid #00a6ff;
  border-radius:10px;
}

.channel-cont {
  margin: 30px;
}

input {
  font-size: 16px;
}

.category-name {
  margin-top: 10px;
  font-size: 25px;
  color: #00a6ff;
  padding-left: 20px;
}

.btn {
  @apply font-bold py-2 px-4 rounded;
}

.btn,
.form-multiselect {
  background-color: #00a6ff;
  color: #fff;
  font-size: 16px;
}

.multiselect__tags {
  display: none !important
}
</style>