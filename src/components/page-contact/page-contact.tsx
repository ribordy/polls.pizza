import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "page-contact",
})
export class PageContact {
  public componentWillLoad() {
    document.title = `Donate | Pizza to the Polls`;
  }

  public render() {
    return (
      <Host>
        <section id="contact" class="page contact">
          <div class="container">
            <ui-card>
              <h1>Contact Us</h1>
              <p>
                <b>To find answers to our most common questions, take a look at our FAQ.</b>
              </p>
              <stencil-route-link url="/about#faq" anchorClass="button is-teal">
                View our FAQ
              </stencil-route-link>
              <hr />
              <ui-pizza-list>
                <li>
                  If you’d like to get in touch with us for a story send an email to{" "}
                  <a href="mailto:press@polls.pizza" class="has-text-teal" target="_blank" rel="noopener noreferrer">
                    press@polls.pizza
                  </a>
                  .
                </li>
                <li>
                  If you’re interested in becoming a partner to help ease the pain of crowded polling places, get in touch by sending an email to{" "}
                  <a href="mailto:partners@polls.pizza" class="has-text-teal" target="_blank" rel="noopener noreferrer">
                    partners@polls.pizza
                  </a>
                  .
                </li>
                <li>
                  For general questions, take a look at our{" "}
                  <stencil-route-link url="/about#faq" anchorClass="has-text-teal">
                    FAQ
                  </stencil-route-link>{" "}
                  first to find answers to our most common questions. If you still can’t find your answer, send us an email at{" "}
                  <a href="mailto:morequestions@polls.pizza" class="has-text-teal" target="_blank" rel="noopener noreferrer">
                    morequestions@polls.pizza
                  </a>
                  .
                </li>
              </ui-pizza-list>
            </ui-card>
          </div>
        </section>
      </Host>
    );
  }
}
