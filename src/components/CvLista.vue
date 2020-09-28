<template>
  <div class="container mt-5">
    <h1 class="mb-3">Cv-databas</h1>
    <!-- COLLAPS -->
    <div class="CVdataBasBox accordion" id="accordionExample">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h2 class="mb-0">
            <button
              class="btn btn-block text-left"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <h5>Elever</h5>
            </button>
          </h2>
        </div>
        <div
          id="collapseOne"
          class="collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Namn:</th>
                  <th scope="col">CV</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="student in students._embedded.studentList"
                  :key="student.id"
                >
                  <td>
                    {{ student.firstName }}
                  </td>
                  <!-- <td>
                    <a href="../assets/cv.pdf">Öppna</a>
                  </td> -->
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingTwo">
          <h2 class="mb-0">
            <button
              class="btn btn-link btn-block text-left collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Collapsible Group Item #2
            </button>
          </h2>
        </div>
        <div
          id="collapseTwo"
          class="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
            single-origin coffee nulla assumenda shoreditch et. Nihil anim
            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
            sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
            occaecat craft beer farm-to-table, raw denim aesthetic synth
            nesciunt you probably haven't heard of them accusamus labore
            sustainable VHS.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CvLista",

  data() {
    return {
      students: [],
    };
  },

  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      fetch("http://localhost:8080/api/v1/students")
        .then((response) => response.json())
        .then((result) => {
          // console.log(result._embedded.studentList);
          this.students = result;
        });
    },
  },
};
</script>

<style scoped>
@media (max-width: 580px) {
  .CVdataBasBox {
    padding: 0 15px;
  }
}
</style>