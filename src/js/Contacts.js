import React from 'react';

const Contacts = () => (
  <main id="contact">
    <h1 class="lg-heading">Contact <span class="text-secondary">Me</span></h1>
    <h2 class="sm-heading">
      This is how you can reach me:
    </h2>
    <div class="boxes">
      <div class="">
        <span class="text-secondary">Email: </span>
        johndoe@test.com
      </div>
      <div class="">
          <span class="text-secondary">Phone: </span>
          (000) 555-5555
        </div>
        <div class="">
            <span class="text-secondary">Address: </span>
            123 Some St Boston MA 02101
          </div>
    </div>
  </main>
)

export { Contacts }