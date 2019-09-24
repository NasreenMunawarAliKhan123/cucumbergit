package reporting;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
	plugin= { "html:src/test/java/reporting/output/cucumber.html.report",
			"json:src/test/java/reporting/output/cucumber.json",
			"junit:src/test/java/reporting/output/cucmber results.xml"
	}
)
public class runnerfile {

}
