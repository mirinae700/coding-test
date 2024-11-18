import java.util.Scanner;

public class Main{
    public static void main(String args[]){
        int a = -10001, b = -10001;
        Scanner scan = new Scanner(System.in);

        while (!(validate(a) && validate(b))) {
            try {
                a = scan.nextInt();
                b = scan.nextInt();
            } catch (Exception e) {}
        }
        System.out.println(getComparisonOperator(a, b));
    }

    public static boolean validate(long number) {
        return number >= -10000 && number <= 10000;
    }

    public static String getComparisonOperator(int a, int b) {
        return a > b ? ">" : a < b ?  "<" : "==";
    }
}