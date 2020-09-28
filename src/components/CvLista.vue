<template>
  <div class="container mt-5">
    <h1 class="mb-3">Cv-databas</h1>
    <!-- COLLAPS -->
    <div class="CVdataBasBox accordion" id="accordionExample">
      <!-- JAVA -->
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
              <h5>Java</h5>
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
                  <td v-if="student.education === 'Java'">
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
      <!-- WEBB -->
      <div class="card">
        <div class="card-header" id="headingTwo">
          <h2 class="mb-0">
            <button
              class="btn btn-block text-left collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <h5>Webbutvecklare</h5>
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
                  <td v-if="student.education === 'Web'">
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
      <!-- APP -->
      <div class="card">
        <div class="card-header" id="headingTwo">
          <h2 class="mb-0">
            <button
              class="btn btn-block text-left collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <h5>Applikationsutvecklare</h5>
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
                  <td v-if="student.education === 'App'">
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
      <!-- Mjukvarutestare -->
      <div class="card">
        <div class="card-header" id="headingTwo">
          <h2 class="mb-0">
            <button
              class="btn btn-block text-left collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <h5>Mjukvarutestare</h5>
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
                  <td v-if="student.education === 'Mjukvarutestare'">
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
      <!-- .Net -->
      <div class="card">
        <div class="card-header" id="headingTwo">
          <h2 class="mb-0">
            <button
              class="btn btn-block text-left collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              <h5>.Net-utvecklare</h5>
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
                  <td v-if="student.education === '.Net'">
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
      <!-- JavaScript -->
      <div class="card">
        <div class="card-header" id="headingTwo">
          <h2 class="mb-0">
            <button
              class="btn btn-block text-left collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              <h5>JavaScript-utvecklare</h5>
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
                  <td v-if="student.education === 'JavaScript'">
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
      <!-- Frontend -->
      <div class="card">
        <div class="card-header" id="headingTwo">
          <h2 class="mb-0">
            <button
              class="btn btn-block text-left collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              <h5>Frontendutvecklare</h5>
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
                  <td v-if="student.education === 'Frontend'">
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
      <!-- IT-projektledare -->
      <div class="card">
        <div class="card-header" id="headingTwo">
          <h2 class="mb-0">
            <button
              class="btn btn-block text-left collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseEight"
              aria-expanded="false"
              aria-controls="collapseEight"
            >
              <h5>IT-projektledare</h5>
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
                  <td v-if="student.education === 'It-projekt'">
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
      <!-- UX-design -->
      <div class="card">
        <div class="card-header" id="headingTwo">
          <h2 class="mb-0">
            <button
              class="btn btn-block text-left collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseNine"
              aria-expanded="false"
              aria-controls="collapseNine"
            >
              <h5>UX-designer</h5>
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
                  <td v-if="student.education === 'Ux'">
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