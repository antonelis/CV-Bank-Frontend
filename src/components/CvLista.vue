<template>
  <div class="container mt-5">
    <h1 class="mb-3 text-center head">Cv-databas</h1>
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
              <h5><span class="round-java">jU</span>Java</h5>
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
                    {{ student.firstName }} {{ student.lastName }}
                  </td>
                  <td v-if="student.education === 'Java'">
                    <a
                      href="http://localhost:8080/downloadFile/30495fdc-f208-40d1-8020-badc9aa0700d"
                      >Öppna</a
                    >
                  </td>
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
              <h5><span class="round-webb">wU</span> Webbutvecklare</h5>
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
                    {{ student.firstName }} {{ student.lastName }}
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
        <div class="card-header" id="headingThree">
          <h2 class="mb-0">
            <button
              class="btn btn-block text-left collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <h5><span class="round-au">aU</span> Applikationsutvecklare</h5>
            </button>
          </h2>
        </div>
        <div
          id="collapseThree"
          class="collapse"
          aria-labelledby="headingThree"
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
                    {{ student.firstName }} {{ student.lastName }}
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
        <div class="card-header" id="headingFour">
          <h2 class="mb-0">
            <button
              class="btn btn-block text-left collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <h5><span class="round-mvt">mT</span> Mjukvarutestare</h5>
            </button>
          </h2>
        </div>
        <div
          id="collapseFour"
          class="collapse"
          aria-labelledby="headingFour"
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
                    {{ student.firstName }} {{ student.lastName }}
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
        <div class="card-header" id="headingFive">
          <h2 class="mb-0">
            <button
              class="btn btn-block text-left collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              <h5><span class="round-net">.N</span> .Net-utvecklare</h5>
            </button>
          </h2>
        </div>
        <div
          id="collapseFive"
          class="collapse"
          aria-labelledby="headingFive"
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
                    {{ student.firstName }} {{ student.lastName }}
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
        <div class="card-header" id="headingSix">
          <h2 class="mb-0">
            <button
              class="btn btn-block text-left collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              <h5><span class="round-js">jsU</span> JavaScript-utvecklare</h5>
            </button>
          </h2>
        </div>
        <div
          id="collapseSix"
          class="collapse"
          aria-labelledby="headingSix"
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
                    {{ student.firstName }} {{ student.lastName }}
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
        <div class="card-header" id="headingSeven">
          <h2 class="mb-0">
            <button
              class="btn btn-block text-left collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              <h5><span class="round-feu">feU</span> Frontendutvecklare</h5>
            </button>
          </h2>
        </div>
        <div
          id="collapseSeven"
          class="collapse"
          aria-labelledby="headingSeven"
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
                    {{ student.firstName }} {{ student.lastName }}
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
        <div class="card-header" id="headingEight">
          <h2 class="mb-0">
            <button
              class="btn btn-block text-left collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseEight"
              aria-expanded="false"
              aria-controls="collapseEight"
            >
              <h5><span class="round-itp">itP</span> IT-projektledare</h5>
            </button>
          </h2>
        </div>
        <div
          id="collapseEight"
          class="collapse"
          aria-labelledby="headingEight"
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
                    {{ student.firstName }} {{ student.lastName }}
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
        <div class="card-header" id="headingNine">
          <h2 class="mb-0">
            <button
              class="btn btn-block text-left collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseNine"
              aria-expanded="false"
              aria-controls="collapseNine"
            >
              <h5><span class="round-ux">uX</span> UX-designer</h5>
            </button>
          </h2>
        </div>
        <div
          id="collapseNine"
          class="collapse"
          aria-labelledby="headingNine"
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
                    {{ student.firstName }} {{ student.lastName }}
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
      file: [],
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
      fetch(
        "http://localhost:8080/downloadFile/0171d1bc-9d5b-4e41-a164-ebab7935d05d"
      )
        .then((response) => response.json())
        .then((result) => {
          // console.log(result._embedded.studentList);
          this.file = result;
        });
    },
  },
};
</script>

<style scoped>
.head {
  color: #693250;
}
.round-java {
  background: orange;
  border-radius: 50%;
  color: white;
  padding: 0.7em;
  margin-right: 0.5em;
}

.round-webb {
  background: rgb(90, 194, 90);
  border-radius: 50%;
  color: white;
  padding: 0.7em;
  margin-right: 0.5em;
}

.round-net {
  background: rgb(50, 81, 221);
  border-radius: 50%;
  color: white;
  padding: 0.7em;
  margin-right: 0.5em;
}

.round-js {
  background: rgb(243, 243, 58);
  border-radius: 50%;
  color: white;
  padding: 0.7em;
  margin-right: 0.5em;
}

.round-itp {
  background: rgb(41, 55, 177);
  border-radius: 50%;
  color: white;
  padding: 0.7em;
  margin-right: 0.5em;
}

.round-feu {
  background: rgb(129, 34, 101);
  border-radius: 50%;
  color: white;
  padding: 0.7em;
  margin-right: 0.5em;
}

.round-mvt {
  background: rgb(216, 111, 25);
  border-radius: 50%;
  color: white;
  padding: 0.7em;
  margin-right: 0.5em;
}

.round-au {
  background: rgb(226, 64, 36);
  border-radius: 50%;
  color: white;
  padding: 0.7em;
  margin-right: 0.5em;
}

.round-ux {
  background: rgb(19, 121, 36);
  border-radius: 50%;
  color: white;
  padding: 0.7em;
  margin-right: 0.5em;
}
@media (max-width: 580px) {
  .CVdataBasBox {
    padding: 0 15px;
  }
}
</style>