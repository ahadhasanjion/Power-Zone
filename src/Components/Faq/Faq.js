import React from 'react';
import './Faq.css';

const Faq = () => {
    return ( 
        <div>
            <div class="accordion faq pt-10" id="accordionExample">
  <div class="accordion-item mb-5 bg-white border border-gray-200">
    <h2 class="accordion-header mb-0" id="headingOne">
      <button class="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
        aria-controls="collapseOne">
        How React Works
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
      data-bs-parent="#accordionExample">
      <div class="accordion-body py-4 px-5">
      React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes
      </div>
    </div>
  </div>
  <div class="accordion-item mb-5 bg-white border border-gray-200">
    <h2 class="accordion-header mb-0" id="headingTwo">
      <button class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
        aria-controls="collapseTwo">
        Difference between Props and State
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
      data-bs-parent="#accordionExample">
      <div class="accordion-body py-4 px-5">
      Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component
      </div>
    </div>
  </div>
  <div class="accordion-item mb-5 bg-white border border-gray-200">
    <h2 class="accordion-header mb-0" id="headingThree">
      <button class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
        aria-controls="collapseThree">
        What UseEffect can do othe than loading data
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
      data-bs-parent="#accordionExample">
      <div class="accordion-body py-4 px-5">
      The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, setting up subscriptions or timers, etc can be lead to unwarranted side-effects.
      </div>
    </div>
  </div>
</div>
    
        </div>
    );
};

export default Faq;