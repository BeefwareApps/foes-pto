// import "./HeaderBar.css";
import { GridColumn, Grid, Image, Header } from "semantic-ui-react";

const HeaderBar = () => {
  return (
    <div style={styles.container}>
      <Grid>
        <GridColumn width={2}>
          <Image
            src="/public/wireframes/foes-logo.png"
            style={styles.foesLogo}
          />
        </GridColumn>
        <GridColumn width={12} verticalAlign="middle">
          <Header size="huge" content="FOES PTO" style={styles.header} />
        </GridColumn>
        <GridColumn width={2} verticalAlign="middle">
          <div>foespto@gmail.com</div>
          <div>foespresident@gmail.com</div>
        </GridColumn>
      </Grid>
    </div>
  );
};

const styles = {
  container: {
    height: "120px",
    width: "100%",
    backgroundColor: "#242734",
    color: "white",
  },
  header: {
    color: "white",
  },
  foesLogo: {
    height: "100px",
    width: "auto",
  },
};

export default HeaderBar;
