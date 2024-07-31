import React from "react";

import remove from "../assets/remove.png";
import check from "../assets/check.png";

const Pricing = () => {
  return (
    <div className="flex mb-10 mt-10 flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-2xl font-bold mb-4">Pricing Plan</h1>
      <div className="overflow-x-auto w-full max-w-6xl mx-auto">
        <table className="border border-gray-300 text-center w-full">
          <thead>
            <tr>
              <th className="border p-2 w-1/4">
                <h1 className="text-xl font-bold">Compare Plans</h1>
                <p className="text-xs text-gray-400 mt-2 font-normal">
                  Choose your workspace plan according to your organization plan
                </p>
              </th>
              <th className="border p-4 w-1/4">
                <h1 className="text-xl font-bold">
                  Free{" "}
                  <span className="text-xs font-normal text-gray-300">
                    /Lifetime
                  </span>
                </h1>
                <button className="bg-blue-500 max-w-md p-2 rounded hover:text-blue-500 hover:bg-transparent font-sans  hover:border text-white mt-2">
                  Create Free Account
                </button>
              </th>
              <th className="border p-4 w-1/4">
                <h1 className="text-xl font-bold">
                  849{" "}
                  <span className="text-xs font-normal text-gray-300">
                    /month
                  </span>
                </h1>
                <button className="bg-blue-500 p-2 max-w-md rounded hover:text-blue-500 hover:bg-transparent font-sans hover:border text-white mt-2">
                  Login to Buy
                </button>
              </th>
              <th className="border p-4 w-1/4">
                <h1 className="text-xl font-bold">
                  4310{" "}
                  <span className="text-xs font-normal text-gray-300">
                    /Year
                  </span>
                </h1>
                <button className="bg-blue-500 font-sans max-w-md p-2 rounded hover:text-blue-500 hover:bg-transparent hover:border text-white mt-2">
                  Login to Buy
                </button>
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr>
              <td className="border p-4">Number of users</td>
              <td className="border p-4">1</td>
              <td className="border p-4">3</td>
              <td className="border p-4">1</td>
            </tr>
            <tr>
              <td className="border p-4">Users per page</td>
              <td className="border p-4">5 pages</td>
              <td className="border p-4">50 pages</td>
              <td className="border p-4">
                Unlimited <br />{" "}
                <span className="text-sm text-gray-400">
                  pages added on demand
                </span>
              </td>
            </tr>
            <tr>
              <td className="border p-4">
                Include essential features to get started
              </td>
              <td className="border justify-center items-center p-4">
                <img className="sm:mx-28" src={check} alt="check" />
              </td>
              <td className="border p-4">
                <img className="sm:mx-28" src={check} alt="check" />
              </td>
              <td className="border p-4">
                <img className="sm:mx-28" src={check} alt="check" />
              </td>
            </tr>
            <tr>
              <td className="border p-4">
                More advanced features for increased productivity
              </td>
              <td className="border p-4">
                <img className="sm:mx-28" src={remove} alt="remove" />
              </td>
              <td className="border p-4">
                <img className="sm:mx-28" src={check} alt="check" />
              </td>
              <td className="border p-4">
                <img className="sm:mx-28" src={check} alt="check" />
              </td>
            </tr>
            <tr>
              <td className="border p-4">Designing and Development</td>
              <td className="border p-4">
                <img className="sm:mx-28" src={remove} alt="remove" />
              </td>
              <td className="border p-4">
                <img className="sm:mx-28" src={check} alt="check" />
              </td>
              <td className="border p-4">
                <img className="sm:mx-28" src={check} alt="check" />
              </td>
            </tr>
            <tr>
              <td className="border p-4">
                Customizable options to meet your specific needs
              </td>
              <td className="border p-4">
                <img className="sm:mx-28" src={remove} alt="remove" />
              </td>
              <td className="border p-4">
                <img className="sm:mx-28" src={check} alt="check" />
              </td>
              <td className="border p-4">
                <img className="sm:mx-28" src={check} alt="check" />
              </td>
            </tr>
            <tr>
              <td className="border p-4">Secure data storage</td>
              <td className="border p-4">
                <img className="sm:mx-28" src={remove} alt="remove" />
              </td>
              <td className="border p-4">
                <img className="sm:mx-28" src={check} alt="check" />
              </td>
              <td className="border p-4">
                <img className="sm:mx-28" src={check} alt="check" />
              </td>
            </tr>
            <tr>
              <td className="border p-4">Email support</td>
              <td className="border p-4">
                <img className="sm:mx-28" src={remove} alt="remove" />
              </td>
              <td className="border p-4">
                <img className="sm:mx-28" src={check} alt="check" />
              </td>
              <td className="border p-4">
                <img className="sm:mx-28" src={check} alt="check" />
              </td>
            </tr>
            <tr>
              <td className="border p-4">24/7 customer support</td>
              <td className="border p-4">
                <img className="sm:mx-28" src={remove} alt="remove" />
              </td>
              <td className="border p-4">
                <img className="sm:mx-28" src={check} alt="check" />
              </td>
              <td className="border p-4">
                <img className="sm:mx-28" src={check} alt="check" />
              </td>
            </tr>
            <tr>
              <td className="border p-4">Analytics and reporting</td>
              <td className="border p-4">
                <img className="sm:mx-28" src={remove} alt="remove" />
              </td>
              <td className="border p-4">
                <img className="sm:mx-28" src={check} alt="check" />
              </td>
              <td className="border p-4">
                <img className="sm:mx-28" src={check} alt="check" />
              </td>
            </tr>
            <tr>
              <td className="border  p-4">Account management</td>
              <td className="border   p-4">
                <img className="sm:mx-28" src={check} alt="check" />
              </td>
              <td className="border  p-4">
                <img className="sm:mx-28" src={check} alt="check" />
              </td>
              <td className="border  p-4">
                <img className="sm:mx-28" src={check} alt="check" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pricing;
