(function () {
  if (typeof navigator === 'undefined' || !navigator.modelContext) return;

  navigator.modelContext.provideContext({
    tools: [
      {
        name: "browse_products",
        description: "Browse grills by category",
        inputSchema: {
          type: "object",
          properties: {
            category: { type: "string", description: "Category slug to browse (e.g. charcoal-grills)" }
          }
        },
        execute: async ({ category }) => {
          const url = category
            ? "https://www.barbecuegrilleu.com/shop/" + category + "/"
            : "https://www.barbecuegrilleu.com/shop/";
          window.location.href = url;
          return { url };
        }
      },
      {
        name: "go_to_order_form",
        description: "Open the order form to place an order. Minimum order $500.",
        inputSchema: { type: "object", properties: {} },
        execute: async () => {
          window.location.href = "https://www.barbecuegrilleu.com/order/";
          return { url: "https://www.barbecuegrilleu.com/order/" };
        }
      },
      {
        name: "contact",
        description: "Contact for product questions or support",
        inputSchema: { type: "object", properties: {} },
        execute: async () => {
          window.location.href = "https://www.barbecuegrilleu.com/contact/";
          return { url: "https://www.barbecuegrilleu.com/contact/" };
        }
      }
    ]
  });
})();
