## Frontend task for Crionet

- Candidate: Mukhtar Abenov
- Linkedin: https://www.linkedin.com/in/abenoov/
- Email: mukhtar.abenov.job@gmail.com

## Instructions

**1. Install Dependencies**  

   Run the following command to install all the project dependencies:

```bash
yarn install
```

**2. Set API key**

   Create a ```.env``` file in the root directory of the project and add your Weather App ID:

```bash
VITE_APP_ID='5458f7fb3e170582a573cf98d46629f7'
```
   This API key is required to fetch weather information for the application.

**3. Start the development server**

Start the development server using the following command:

```bash
yarn dev
```

After running this command, you will see a message like:

```bash
running at: http://localhost:3002
```

## Architecture and Design

**Component-Based Approach:**

- The application is divided into small, isolated components such as `SearchInput`, `Select`, `QueryPanel`, `CountryCard`.
- Components are developed following the KISS (Keep It Simple, Stupid) and DRY (Don't Repeat Yourself) principles.

**State Management:**

- Local State (`useState`): Used for managing client-side data such as search queries, selected continent, and sort order.
- Apollo Client: Utilized for working with server-side data, simplifying interactions with the GraphQL API and providing caching.

**Routing:**

- Implemented using `react-router-dom`:
   - `/`: Displays the list of countries.
   - `/country/:code`: Displays detailed information about a specific country.

**GraphQL API:**

- Optimized Queries: GraphQL queries are designed to minimize the retrieval of unnecessary data:
   - `GET_ALL_COUNTRIES` — for obtaining the list of countries.
   - `GET_COUNTRY_DETAILS` — for detailed information about a specific country.
- Caching: Apollo Client enables caching of results, improving the application's performance.

**Responsiveness:**

- Tailwind CSS: Used for responsive design.

## Challenges Faced

**Handling API Limitations**

- **Challenge**: The GraphQL API I was working with provided predefined structures and didn't support custom filters like sorting or searching on the server side.
- **Solution**: I implemented client-side filtering and sorting using utility functions. The search feature now supports queries by name, language, and capital city, while sorting is managed dynamically based on user input.
- **Next Steps**: In the future, we can implement `paginated queries`, `infinite scrolling`, or `debouncing` the search input to reduce the number of requests sent during rapid user input.



