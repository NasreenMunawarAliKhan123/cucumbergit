package reporting;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class stepdef {
	@Given("I enter {int} in the calculator")
	public void step1(int num) {
		System.out.println("I have entered "+num+ " in the calculator");
		
	}
	
	@And("I press {word}")
	public void step2(String a){
		System.out.println("I press "+a);
	}
	@And("I have entered {int} in the calculator")
	public void step3(int b){
		System.out.println("I have entered "+b+ " in the calculator ");
	}
	@Then("I press equal symbol")
	public void step4(){
		System.out.println("I press equal symbol");
	}
	@When("The result is {int} is displayed")
	public void step5(int c){
		System.out.println("The result is "+c+ " is displayed ");
		System.out.println("------------------------");
	}
	
}
